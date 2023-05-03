<script setup lang="ts" :inheritAttrs="false">
import { useChatStore } from '@/store/chat'

// const { VITE_FEATURES } = import.meta.env

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
    router.push({ name: 'Midjourney' })
  }
  if (command === 'Dall_E') {
    router.push({ name: 'DallE' })
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
            <img class="w-2/3" src="@/assets/openai_dall_e.svg" alt="DALL·E" />
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
    @apply p-2 lg:p-4 rounded-md cursor-pointer;
    background-color: var(--color-secondary);
    &:hover {
      background-color: var(--color-white);
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
