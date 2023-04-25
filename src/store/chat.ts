import { Message, Modal } from '@arco-design/web-vue'
import axios from 'axios'
import { encode } from 'gpt-token-utils'
import { cloneDeep } from 'lodash-es'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { useRequestChatStream } from '@/hooks/useRequestChatStream'
import type { ChatItem, MessageItem, MessageModel } from '@/types/chat'
import { createMessage } from '@/utils'

import { ALL_MODELS_MAX_TOKENS } from './../config/index'
import { useConfigStore } from './config'

export const useChatStore = defineStore(
  '__AI_1024_STORE_CHAT',
  () => {
    const configStore = useConfigStore()
    const abortController = ref<AbortController>(new AbortController())
    const newChat: ChatItem = {
      id: genNonDuplicateID(),
      topic: '',
      sendMemory: true,
      messages: [],
      lastUpdate: new Date().getTime(),
      lastSummarizeIndex: 0
    }
    const currentChat = ref<string>()
    const sessions = ref<ChatItem[]>([])
    const session = ref<ChatItem>()
    const fetching = ref<boolean>(false)

    watchEffect(() => {
      session.value = sessions.value.find(({ id }) => id === currentChat.value)
    })

    /** 新加一个聊天 */
    const newChatAction = () => {
      if (abortController.value?.abort) {
        abortController.value?.abort()
      }
      const id = genNonDuplicateID()
      sessions.value.unshift(
        cloneDeep({
          ...newChat,
          topic: '',
          id
        })
      )
      currentChat.value = id
    }

    /** 清除会话 */
    const clearSessions = () => {
      if (abortController.value?.abort) {
        abortController.value?.abort()
      }
      Modal.warning({
        title: '操作提示',
        hideCancel: false,
        alignCenter: false,
        content: '是否确认移除所有会话信息, 此操作不可逆!!!',
        onOk() {
          sessions.value = []
          newChatAction()
        }
      })
    }

    /** 选中聊天 */
    const changeCurrentChatAction = (id: string) => {
      if (abortController.value?.abort) {
        abortController.value?.abort()
      }
      session.value?.messages?.forEach(item => (item.streaming = false))
      currentChat.value = id
    }

    /** 删除一个聊天 */
    const removeChatAction = (id: string) => {
      Modal.warning({
        title: '操作提示',
        hideCancel: false,
        alignCenter: false,
        content: '是否确认移除当前选择会话?',
        onOk() {
          // 如果删除的不是当前选中的 直接删除
          const index = sessions.value.findIndex(item => item.id === id)

          if (id !== currentChat.value) {
            sessions.value.splice(index, 1)
          } else {
            if (sessions.value.length > 1) {
              currentChat.value = sessions.value[0].id
            }
            sessions.value.splice(index, 1)
            if (abortController.value?.abort) {
              abortController.value?.abort()
            }
            if (sessions.value.length === 0) {
              newChatAction()
            }
          }
        }
      })
    }

    /** 根据id获取当前消息 */
    const getMessageById = (mId: string): MessageItem => {
      return session.value?.messages.find(({ id }) => mId === id)!
    }

    /** 修改当前会话标题 */
    const handleChangeSessionTopicAction = (v: string) => {
      session.value!.topic = v || session.value?.topic || ''
    }

    /** 获取需要携带的消息 */
    const getRequiredMessages = async (curr: Partial<MessageItem>) => {
      // 最大token
      const maxTokens = ALL_MODELS_MAX_TOKENS[configStore.chatModel] || 2049
      // 保存返回结果
      const res = <MessageItem[]>[]
      // 历史消息 过滤错误消息
      const sMs = (session.value?.messages || []).filter(item => !item.isError)
      // 当前所有的历史消息  (过滤后的消息 + 当前发送的)
      const messages = cloneDeep(sMs.concat(curr as MessageItem)).map(
        ({ role, content }) => ({ role, content })
      )

      if (messages.length > 20) {
        // await new Promise<void>((resolve, reject) => {
        //   Modal.warning({
        //     title: '提示',
        //     okText: '继续',
        //     hideCancel: false,
        //     content:
        //       '内容超出限制，已经帮您自动截断，将不会携带完整的历史信息,可以尝试新开会话，以减少历史聊天的携带。如果继续发送AI也许不会联系上下文回答您的问题，确定要继续发送吗？',
        //     onOk() {
        //       resolve()
        //     },
        //     onCancel() {
        //       reject()
        //       throw new Error('cancel send')
        //     }
        //   })
        // })
        return messages.slice(messages.length - 20, messages.length)
      }
      return messages
      // token数量  循环一次 加一次
      let sum = 0
      const tokensArray: number[] = []
      try {
        // 开始循环
        messages.reverse().forEach(item => {
          // 计算当前循环消息的token
          const tokens = encode(item.content).length
          tokensArray.push(tokens)
          // 1. 如果当前token
          // 2. 如果 token总数 + 当前token数量 < 最大token数量
          // 直接抛出异常,停止循环
          if (tokens < maxTokens && sum + tokens < maxTokens) {
            sum += tokens
            // 满足条件 加入到需要发送到服务的列表
            res.push(item as MessageItem)
          } else {
            throw new Error()
          }
        })
      } catch (error: any) {
        // report({ type: 'error', msg: error?.message || error })
      }
      // if (res.length < 1) {
      //   report({ sum, messages, tokenArray })
      // }
      // 判断极端情况 sum === 0 并且 tokensArray为空   说明报错了 直接将传入的原始消息发到后台 否则将 保存的结果 发送到后台
      const resMessages = sum < 1 ? messages : res
      // 如果> 40条消息 截断
      if (resMessages.length > 20) {
        return resMessages.splice(0, 20).reverse()
      }
      // 翻转数据  需要将最新的方法 最后
      return resMessages.reverse()
    }

    /** 发送消息 */
    const sendMessageAction = async (
      content: string,
      onMessage?: (done: boolean) => void,
      appendUserMessage: boolean = true
    ) => {
      if (!content?.length) {
        Message.error('请输入您的消息')
        return
      }
      const messages = await getRequiredMessages({ role: 'user', content })
      // if (messages.length < 1) {
      //   Message.error(`超出模型允许的最大字数，请删减字符`)
      //   return
      // }
      const reqData: MessageModel = {
        card: configStore.cardInfo?.enable ? configStore.card : undefined,
        messages,
        temperature: configStore.temperature,
        model: configStore.chatModel,
        is_stream: true
      }
      const userMessage: MessageItem = createMessage({
        role: 'user',
        content
      })
      if (appendUserMessage) {
        session.value!.messages.push(userMessage)
      }
      const botMessage: MessageItem = createMessage({
        role: 'assistant',
        streaming: true,
        content: ''
      })
      session.value!.messages.push(botMessage)

      fetching.value = true
      // requestChatStream(reqData, {
      useRequestChatStream(reqData, {
        onController(ctl) {
          abortController.value = ctl
        },
        onMessage(message: string, done: boolean) {
          console.log({ message, done })
          getMessageById(botMessage.id).content = message
          onMessage && onMessage(done)
          if (done) {
            fetching.value = false
            getMessageById(botMessage.id).streaming = false
            getMessageById(botMessage.id).date = new Date().valueOf()
            if (!session.value?.topic) {
              const topic = userMessage.content.trim().replace(/\r/g, '')
              session.value!.topic =
                topic.length > 30 ? topic.slice(0, 30) : topic
            }
          }
        },
        onError(error: any, statusCode?: number) {
          console.log(error)
          fetching.value = false
          if (axios.isCancel(error)) {
            // 手动停止, 不做content操作
          } else if (statusCode === 401) {
            getMessageById(botMessage.id).content = '请输入积分卡'
          } else {
            getMessageById(botMessage.id).content +=
              statusCode !== undefined
                ? '\n\n' +
                  `\`${error?.response?.data || '出错了，稍后重试吧'}\``
                : '\n\n' + '`网络异常, 请稍后重试!`'
          }
          getMessageById(botMessage.id).streaming = false
          // userMessage.isError = true
          getMessageById(botMessage.id).isError = true
          getMessageById(botMessage.id).date = new Date().valueOf()
          onMessage && onMessage(true)
        }
      })
    }

    const messageRetryAction = (index: number, onMessage: () => void) => {
      session.value?.messages.splice(index, 1)
      const message = session.value?.messages[index - 1]
      sendMessageAction(message?.content || '', onMessage, false)
    }

    /** 初始化判断是否有聊天, 没有创建一个空的 */
    onMounted(() => {
      // setTimeout(() => {
      //   console.log('开始')
      //   useRequestChatStream({
      //     card: '10241025',
      //     messages: [{ role: 'user', content: '写一个js节流函数' }],
      //     temperature: 0.7,
      //     model: 'gpt-3.5-turbo',
      //     is_stream: true
      //   })
      // }, 3000)
      // sessions.value = []
      fetching.value = false
      if (sessions.value?.length < 1) {
        newChatAction()
      } else {
        sessions.value.forEach(item => {
          item.messages.forEach(item => {
            item.streaming = false
          })
        })
      }
    })
    return {
      session,
      sessions,
      fetching,
      currentChat,
      abortController,
      newChatAction,
      clearSessions,
      removeChatAction,
      sendMessageAction,
      messageRetryAction,
      changeCurrentChatAction,
      handleChangeSessionTopicAction
    }
  },
  // 保存到本地 localStorage
  {
    persist: {
      storage: localStorage
    }
  }
)
