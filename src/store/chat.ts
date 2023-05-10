import { Message, Modal } from '@arco-design/web-vue'
import axios from 'axios'
import { cloneDeep } from 'lodash-es'
import { isString } from 'markdown-it/lib/common/utils'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { useRequestChatStream } from '@/hooks/useRequestChatStream'
import type {
  ChatItem,
  ChatModel,
  MessageItem,
  MessageModel
} from '@/types/chat'
import { createMessage } from '@/utils'

import { useConfigStore } from './config'

export const useChatStore = defineStore(
  '__AI_1024_STORE_CHAT',
  () => {
    const configStore = useConfigStore()
    const abortController = ref<AbortController>(new AbortController())
    const newChat: ChatItem = {
      id: genNonDuplicateID(),
      model: 'gpt-3.5-turbo',
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
    const newChatAction = (model: ChatModel = 'gpt-3.5-turbo') => {
      if (abortController.value?.abort) {
        abortController.value?.abort()
      }
      const id = genNonDuplicateID()
      sessions.value.unshift(
        cloneDeep({
          ...newChat,
          model,
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
          // newChatAction()
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
              // newChatAction()
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
      // const maxTokens = ALL_MODELS_MAX_TOKENS[configStore.chatModel] || 2049
      // // 保存返回结果
      // const res = <MessageItem[]>[]
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
      let reqData: MessageModel
      if (session.value?.model === 'gpt-4') {
        const messages = (session.value?.messages ?? []).filter(
          ({ role, isError }) => role === 'assistant' && !isError
        )
        // console.log(messages[messages.length - 1])
        reqData = {
          card: configStore.cardInfo?.enable ? configStore.card : undefined,
          model: 'gpt-4',
          question: content,
          conversation_id:
            Array.isArray(messages) && messages?.length > 0
              ? messages[messages.length - 1].conversation_id
              : undefined
        }
      } else {
        const messages = await getRequiredMessages({ role: 'user', content })
        reqData = {
          card: configStore.cardInfo?.enable ? configStore.card : undefined,
          messages,
          temperature: configStore.temperature,
          model: 'gpt-3.5-turbo',
          is_stream: true
        }
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
      // console.time('fetch')
      useRequestChatStream(reqData, {
        onController(ctl) {
          abortController.value = ctl
        },
        onMessage(message: string, done: boolean, conversationId?: string) {
          // console.log(message)
          if (!session.value?.topic) {
            const topic = userMessage.content.trim().replace(/\r/g, '')
            session.value!.topic =
              topic.length > 30 ? topic.slice(0, 30) : topic
          }
          if (message) {
            getMessageById(botMessage.id).content = message
          }
          // console.log(conversationId)
          if (conversationId) {
            getMessageById(botMessage.id).conversation_id = conversationId
          }
          if (done) {
            onMessage && onMessage(done)
            fetching.value = false
            getMessageById(botMessage.id).streaming = false
            getMessageById(botMessage.id).date = new Date().valueOf()
            console.timeEnd('fetch')
          }
        },
        onError(error: any, statusCode?: number) {
          // console.log(error, statusCode)
          fetching.value = false
          if (axios.isCancel(error)) {
            // 手动停止, 不做content操作
          } else if (statusCode === 5055) {
            getMessageById(botMessage.id).content = getMessageById(
              botMessage.id
            ).content
              ? getMessageById(botMessage.id).content + '\n\n\n' + error
              : error
            getMessageById(botMessage.id).isError = true
          } else if (statusCode === 401) {
            getMessageById(botMessage.id).content = '请输入积分卡'
          } else if (statusCode === 500) {
            getMessageById(botMessage.id).isError = true
            getMessageById(botMessage.id).content =
              error?.response?.data || '出错了'
          } else {
            const _content = getMessageById(botMessage.id).content
            getMessageById(botMessage.id).content = _content
              ? _content +
                (statusCode !== undefined
                  ? `\n\n\n${error?.response?.data || '出错了，稍后重试吧'}`
                  : '\n\n\n网络异常, 请稍后重试!')
              : isString(error)
              ? error
              : '网络异常, 请稍后重试!'

            getMessageById(botMessage.id).isError = true
          }
          getMessageById(botMessage.id).streaming = false
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
      fetching.value = false
      if (sessions.value?.length < 1) {
        // newChatAction()
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
