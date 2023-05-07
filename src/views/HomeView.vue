<script setup lang="ts" :inheritAttrs="false">
import { Message } from '@arco-design/web-vue'

import { useChatStore } from '@/store/chat'

const { VITE_FEATURES } = import.meta.env

const router = useRouter()
type Command = 'Chat_3.5' | 'Chat_4' | 'Midjourney' | 'Dall_E'
// const configStore = useConfigStore()
const chatStore = useChatStore()
const handleToPage = (command: Command) => {
  const sessions = chatStore.sessions
  if (command === 'Chat_3.5') {
    if (
      sessions.length < 1 ||
      sessions[0]?.model === 'gpt-4' ||
      ((!sessions[0]?.model || sessions[0]?.model == 'gpt-3.5-turbo') &&
        sessions[0]?.messages.length > 0)
    ) {
      chatStore.newChatAction()
    }
    router.push({ name: 'Chat' })
  }
  if (command === 'Chat_4') {
    if (
      sessions.length < 1 ||
      sessions[0]?.model === 'gpt-3.5-turbo' ||
      (sessions[0]?.model == 'gpt-4' && sessions[0]?.messages.length > 0)
    ) {
      chatStore.newChatAction('gpt-4')
    }
    router.push({ name: 'Chat' })
  }
  if (command === 'Midjourney') {
    if (VITE_FEATURES.includes('MIDJOURNEY')) {
      router.push({ name: 'Midjourney' })
    } else {
      Message.info('即将上线~')
    }
  }
  if (command === 'Dall_E') {
    if (VITE_FEATURES.includes('DALL_E')) {
      router.push({ name: 'DallE' })
    } else {
      Message.info('即将上线~')
    }
  }
}
</script>

<template>
  <a-scrollbar
    outer-style="flex: 1; overflow: hidden;"
    class="overflow-y-auto h-full p-4 flex flex-col gap-y-2"
  >
    <div class="home-logo__wrapper">
      <img class="logo" src="@/assets/openai.svg" :alt="APP_TITLE" />
      <h1 class="title">{{ APP_TITLE }}</h1>
    </div>
    <div class="feature-grid xl:max-w-4xl max-w-11/12">
      <div @click="handleToPage('Chat_3.5')" class="feature dark:bg-dark">
        <!-- <a-button class="icon bg-gray-200 dark:bg-dark-900">🤖</a-button> -->
        <div class="flex items-center gap-x-4">
          <a-button class="icon bg-gray-200 dark:bg-dark-900">
            <img class="w-2/3" src="@/assets/openai.svg" alt="GPT-3.5 Turbo" />
          </a-button>
          <h2 class="title">GPT 3.5</h2>
        </div>
        <p class="details">人工智能聊天工具，模拟人类思维，适用于多种语境。</p>
      </div>
      <div @click="handleToPage('Chat_4')" class="feature dark:bg-dark">
        <!-- <a-button class="icon bg-gray-200 dark:bg-dark-900">🌐</a-button> -->
        <div class="flex items-center gap-x-4">
          <a-button class="icon bg-gray-200 dark:bg-dark-900">
            <img class="w-2/3" src="@/assets/openai.svg" alt="GPT-3.5 Turbo" />
          </a-button>
          <h2 class="title">GPT 4</h2>
        </div>
        <p class="details">
          延续 Chat GPT 系列，以更先进的架构提供更多样的自然语言生成服务。
        </p>
      </div>
      <div @click="handleToPage('Dall_E')" class="feature dark:bg-dark">
        <div class="flex items-center gap-x-4">
          <a-button class="icon bg-gray-200 dark:bg-dark-900">
            <!-- <img class="w-2/3" src="@/assets/openai_dall_e.svg" alt="DALL·E" /> -->
            <svg
              class="w-2/3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 320"
            >
              <g fill="currentColor">
                <path
                  d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"
                ></path>
              </g>
            </svg>
          </a-button>
          <h2 class="title">DALL·E</h2>
        </div>
        <p class="details">
          基于人工智能的创意绘图工具，将文字描述转化为创意图像，让您的想象得到无限扩展。
        </p>
      </div>

      <div @click="handleToPage('Midjourney')" class="feature dark:bg-dark">
        <!-- <a-button class="icon bg-gray-200 dark:bg-dark-900">📝</a-button> -->
        <div class="flex items-center gap-x-4">
          <a-button class="icon bg-gray-200 dark:bg-dark-900">
            <img class="w-2/3" src="@/assets/mj-180x180.png" alt="Midjourney" />
          </a-button>
          <h2 class="title">Midjourney</h2>
        </div>
        <p class="details">
          智能AI绘图软件，为您提供全新的绘图体验，让您的想象变得更加生动、具体。
        </p>
      </div>
    </div>
    <!-- <div class="flex items-center justify-center mt-6 gap-x-6">
      <a-button
        type="primary"
        shape="round"
        class="px-8"
        v-if="VITE_FEATURES.includes('CHAT')"
        @click="$router.push({ name: 'Chat' })"
      >
        开启GPT互动
      </a-button>
      <a-button
        type="outline"
        shape="round"
        class="px-8"
        v-if="VITE_FEATURES.includes('DRAW')"
        @click="$router.push({ name: 'Draw' })"
      >
        绘图
      </a-button>
      <a-button
        type="outline"
        shape="round"
        class="px-8"
        v-if="VITE_FEATURES.includes('TOOLS')"
        @click="$router.push({ name: 'Tools' })"
      >
        工具
      </a-button>
    </div> -->
  </a-scrollbar>
</template>

<style lang="less" scoped>
.home-logo__wrapper {
  @apply hidden flex-col lg:flex items-center justify-center text-primary  pt-2 lg:pt-4 lg:pt-10;
  .logo {
    @apply w-8 lg:w-14 h-8 lg:h-14 w-8;
  }

  .title {
    @apply text-base lg:text-xl;
  }
}
.feature-grid {
  @apply grid grid-cols-1 lg:grid-cols-2  w-full mx-auto gap-2 lg:gap-6 pt-10 lg:pt-4;
  .feature {
    @apply p-2 lg:p-4 rounded-md cursor-pointer transition-all;
    background-color: var(--color-secondary);
    &:hover {
      @apply bg-white dark:bg-dark;
    }
    .icon {
      @apply text-sm h-6 w-6 lg:h-10 lg:w-10 lg:text-xl p-0 rounded-md;
    }
    .title {
      @apply text-sm lg:text-base dark:text-gray-300;
    }
    .details {
      @apply text-xs lg:text-sm;
      color: var(--color-text-2);
    }
  }
}
</style>
