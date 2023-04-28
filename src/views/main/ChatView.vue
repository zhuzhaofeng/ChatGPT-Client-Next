<script setup lang="ts">
import { Message, type ScrollbarInstance } from '@arco-design/web-vue'

import assistant from '@/assets/openai-white.svg'
import userAvatar from '@/assets/userAvatars/user_avatar_36.webp'
import { useChatStore } from '@/store/chat'
import { useConfigStore } from '@/store/config'
import { SubmitKey } from '@/types/keys'

useCopyCode()
const chatStore = useChatStore()
const configStore = useConfigStore()
const session = computed(() => chatStore.session)
const { isMobileScreen } = useWindowSize()

/** 鼠标滚动之后不自动滚动 */
const userWheel = ref(false)
const avatar: Record<string, string> = {
  user: userAvatar,
  assistant: assistant
}

const scrollbarRef = ref<ScrollbarInstance>()
const currentTitle = ref('新的聊天')
watchEffect(() => {
  currentTitle.value = chatStore.session?.topic || '新的聊天'
})
watch(
  () => chatStore.currentChat,
  () => {
    nextTick(() => {
      scrollbarRef.value?.scrollTop(
        (scrollbarRef.value?.containerRef?.scrollHeight ?? 0) - 200
      )
    })
  }
)

const message = ref('')

const handleRetry = (index: number) => {
  userWheel.value = false
  chatStore.messageRetryAction(index, () => {
    if (!userWheel.value) {
      scrollbarRef.value?.scrollTop(
        (scrollbarRef.value?.containerRef?.scrollHeight ?? 0) - 200
      )
    }
  })
}

const handleSendMessage = () => {
  if (isAllWhitespace(message.value)) {
    Message.clear()
    Message.error('请输入消息内容')
    return
  }

  userWheel.value = false
  chatStore.sendMessageAction(message.value, (done: boolean) => {
    if (!userWheel.value) {
      scrollbarRef.value?.scrollTop(
        (scrollbarRef.value?.containerRef?.scrollHeight ?? 0) - 200
      )
    }
    if (done) {
      nextTick(() => {
        useCopyCode()
      })
    }
  })
  message.value = ''
}

const handleListenerUserWheel = (event: any) => {
  if (event.deltaY < 10) {
    userWheel.value = true
  }
  // 获取滚动距离
  // console.log('滚动距离：', event.deltaY)
}

onMounted(() => {
  nextTick(() => {
    scrollbarRef.value?.scrollTop(
      (scrollbarRef.value?.containerRef?.scrollHeight ?? 0) - 200
    )
    scrollbarRef.value?.$el
      .querySelector('.arco-scrollbar-container')
      .addEventListener('wheel', handleListenerUserWheel)
  })
})

const handleScrollbarScroll = (evt: any) => {
  if (
    (evt?.target?.scrollTop || 0) + (evt?.target?.offsetHeight || 0) >=
    (evt?.target?.scrollHeight || 0) - 70
  ) {
    userWheel.value = false
  }
}

onUnmounted(() => {
  if (chatStore.abortController?.abort) {
    chatStore.abortController?.abort()
  }

  scrollbarRef.value?.$el
    .querySelector('.arco-scrollbar-container')
    .removeEventListener('wheel', handleListenerUserWheel)
})

/** 修改提交键 */
// const handleSubmitChange = (value: any) => {
//   configStore.changeSubmitKeyAction(value as SubmitKey)
// }

/**
 * 修改当前标题
 * @param value string 标题
 */
const handleEditEnd = () => {
  chatStore.handleChangeSessionTopicAction(currentTitle.value)
}

const handleEnter = (event: KeyboardEvent) => {
  if (!isMobileScreen.value) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSendMessage()
    }
  }
  //  else {
  //   if (event.key === 'Enter') {
  //     event.preventDefault()
  //     handleSendMessage()
  //   }
  // }
  // if (event.shiftKey && event.code === 'Enter') {
  //   event.preventDefault()
  //   message.value.s
  // }
  // // 如果设置为 "enter 发送消息"
  // if (configStore.submitKey === SubmitKey.Enter) {
  //   // 如果按下了 Shift + Enter，则输入回车符
  //   if (event.shiftKey && event.code === 'Enter') {
  //     event.preventDefault()
  //   }
  //   // 如果按下了 Enter，则发送消息
  //   else if (!event.shiftKey && event.code === 'Enter') {
  //     event.preventDefault()
  //     handleSendMessage()
  //   }
  // }
  // 如果设置为 "Shift + Enter 发送消息"
  // if (configStore.submitKey === SubmitKey.ShiftEnter) {
  //   // 如果按下了 Enter，则输入回车符
  //   if (!event.shiftKey && event.code === 'Enter') {
  //     event.preventDefault()
  //   }
  //   // 如果按下了 Shift + Enter，则发送消息
  //   else if (event.shiftKey && event.code === 'Enter') {
  //     event.preventDefault()
  //     handleSendMessage()
  //   }
  // }
}

const handleCopyMessage = (value: string) => {
  copyText({ text: value })
  Message.clear()
  Message.success('复制成功')
}

const placeholder = computed(() => {
  let res = '请输入您的消息'
  if (!isMobileScreen.value) {
    res += `，${configStore.submitKey} 发送，${
      configStore.submitKey === SubmitKey.Enter
        ? SubmitKey.ShiftEnter
        : SubmitKey.Enter
    } 换行`
  }
  return res
})
</script>

<template>
  <!-- <a-layout-header
    class="h-14 px-4 flex items-center gap-x-3 bg-white dark:bg-dark"
  >
    <div
      class="flex flex-col editable-title__wrapper"
      :class="{ 'is-mobile': isMobileScreen }"
    >
      <a-typography-paragraph
        class="m-0"
        editable
        v-model:editText="currentTitle"
        @edit-end="handleEditEnd"
      >
        {{ currentTitle }}
      </a-typography-paragraph>
    </div>
    <i class="flex-1" v-if="!isMobileScreen"></i>
    <DownloadSession v-if="session?.messages?.length"></DownloadSession>
  </a-layout-header>
  <a-divider class="m-0" /> -->
  <a-layout-content class="flex flex-col flex-1 overflow-hidden">
    <main class="chat-wrapper">
      <a-scrollbar
        ref="scrollbarRef"
        @scroll="handleScrollbarScroll"
        outer-style="flex: 1; overflow: hidden; "
        class="overflow-y-auto h-full p-4 flex flex-col gap-y-2 pb-20"
      >
        <div
          v-if="!session?.messages?.length"
          class="flex flex-col items-center justify-center mt-10 gap-y-10 text-center text-gray-600"
        >
          <span>
            国内最快最好用的gpt站点，网址经常变更，所以使用前一定要记得先加群！！！
          </span>
          <div class="grid grid-cols-2">
            <div class="flex flex-col items-center gap-y-2 py-2">
              <img
                class="max-w-40 w-11/12 border-solid border border-gray-200 p-1"
                alt="QQ"
                src="/QQ.png"
              />
              <span class="">QQ群</span>
            </div>
            <div class="flex flex-col items-center gap-y-2 py-2">
              <img
                class="max-w-40 w-11/12 border-solid border border-gray-200 p-1"
                alt="WeChat"
                src="/WeChat.png"
              />
              <span class="">微信群</span>
            </div>
          </div>
        </div>
        <section
          v-for="(item, index) in session?.messages ?? []"
          :key="item.id"
          class="message-item"
          :class="[
            item.role === 'assistant' ? 'is-reply' : 'is-request',
            isMobileScreen ? 'max-w-full' : 'max-w-4/5'
          ]"
        >
          <div
            class="flex items-center gap-x-4"
            :class="{ 'flex-row-reverse': item.role !== 'assistant' }"
          >
            <a-spin v-if="item.role === 'assistant'" :loading="item.streaming">
              <a-avatar
                :size="32"
                :class="
                  item.role === 'assistant' ? 'bg-primary p-2' : 'bg-success'
                "
              >
                <img :src="avatar[item.role] ?? ''" />
              </a-avatar>
            </a-spin>
            <small v-date-time="item.date" class="date-time">
              {{ item.date }}
            </small>
          </div>
          <small
            v-if="item.streaming && item.role === 'assistant'"
            class="text-info"
          >
            正在输入...
          </small>
          <section
            :class="[
              'message-item__content',
              {
                'is-user': item.role === 'user'
              },
              { 'is-assistant': item.role === 'assistant' }
            ]"
          >
            <div v-if="item.role === 'assistant'" class="message-item__actions">
              <a-tooltip content-class="text-xs" content="复制" position="top">
                <a-button
                  @click="handleCopyMessage(item.content)"
                  size="mini"
                  shape="circle"
                  type="text"
                >
                  <icon-copy class="text-base" />
                </a-button>
              </a-tooltip>

              <a-tooltip content-class="text-xs" content="重试" position="top">
                <a-button
                  @click="handleRetry(index)"
                  size="mini"
                  shape="circle"
                  type="text"
                >
                  <icon-sync class="text-base" />
                </a-button>
              </a-tooltip>
            </div>
            <MessageContent
              :key="item.content"
              :text="item.content"
              :inversion="item.role !== 'assistant'"
            ></MessageContent>
          </section>
        </section>
      </a-scrollbar>
      <a-divider class="m-0" />
      <footer class="chat-footer">
        <!-- <a-spin :loading="chatStore.fetching" class="footer-spin">
          <template #icon> </template>
        </a-spin> -->
        <a-button
          @click="chatStore.abortController?.abort()"
          shape="round"
          status="danger"
          v-if="chatStore.fetching"
          class="stop-receiving"
        >
          <icon-record-stop class="text-lg mr-2" />
          停止
        </a-button>
        <a-textarea
          :readonly="chatStore.fetching"
          v-model="message"
          @keypress="handleEnter"
          class="bg-white dark:bg-dark-900 border-none"
          :auto-size="{ minRows: isMobileScreen ? 1 : 3, maxRows: 6 }"
          :placeholder="placeholder"
        />
        <a-button
          size="medium"
          class="rounded text-xs"
          v-if="isMobileScreen && message.trim().length > 0"
          @click="handleSendMessage"
          type="primary"
        >
          发送
        </a-button>
      </footer>
    </main>
  </a-layout-content>
</template>

<style lang="less">
.chat-wrapper {
  @apply h-full flex-1 flex flex-col overflow-hidden;
  .message-item {
    @apply flex flex-col items-start justify-items-start gap-2 pl-0;
    &.is-reply {
      // @apply pr-10;
    }
    &.is-request {
      @apply items-end pl-10 max-w-max ml-auto;
    }
    .message-item__content {
      @apply relative flex flex-col px-4 py-3 text-sm rounded-lg max-w-full min-w-72;
      &.is-user {
        @apply justify-end bg-primary text-white;
      }

      &.is-assistant {
        @apply bg-white dark:bg-dark;
      }
    }

    .message-item__actions {
      @apply flex items-center gap-x-1 pl-4 absolute -top-9 right-8 opacity-0  transition-all duration-500;
    }
    &:hover .message-item__actions {
      @apply right-0 opacity-100;
    }
  }
}
.chat-footer {
  @apply relative w-full flex items-end bg-white dark:bg-dark-900 pl-2 pr-4 justify-end pt-3 pb-2;

  .stop-receiving {
    @apply absolute -top-12 left-1/2 transform -translate-x-1/2;
  }
}
.date-time {
  color: rgb(var(--gray-8));
}
</style>
