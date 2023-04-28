<script setup lang="ts" :inheritAttrs="false">
const { VITE_FEATURES } = import.meta.env
</script>

<template>
  <a-scrollbar
    outer-style="flex: 1; overflow: hidden;"
    class="overflow-y-auto h-full p-4 flex flex-col gap-y-2"
  >
    <div class="home-logo__wrapper">
      <img class="logo" src="@/assets/openai.svg" alt="Ai 智能⼯具平台" />
      <h1 class="title">Ai 智能⼯具平台</h1>
    </div>
    <div class="feature-grid xl:max-w-4xl max-w-11/12">
      <article class="feature dark:bg-dark">
        <!-- <a-button class="icon bg-gray-200 dark:bg-dark-900">🤖</a-button> -->
        <a-button class="icon bg-gray-200 dark:bg-dark-900">
          <img
            class="w-2/3"
            src="@/assets/ai-180x180.png"
            alt="GPT-3.5 Turbo"
          />
        </a-button>
        <h2 class="title">GPT-3.5 Turbo</h2>
        <p class="details">
          ⾼性能AI语⾔模型，具有强⼤的⽂本⽣成和理解能⼒，能够满⾜⼴泛的应⽤场景
        </p>
      </article>
      <article class="feature dark:bg-dark">
        <!-- <a-button class="icon bg-gray-200 dark:bg-dark-900">🌐</a-button> -->
        <a-button class="icon bg-gray-200 dark:bg-dark-900">
          <img class="w-2/3" src="@/assets/ai-180x180.png" alt="GPT-4" />
        </a-button>
        <h2 class="title">GPT-4</h2>
        <p class="details">
          基于GPT-3.5的升级版，具有更⾼级的智能、更强⼤的学习能⼒和更⼴泛的知识覆盖范围
        </p>
      </article>
      <article class="feature dark:bg-dark">
        <!-- <a-button class="icon bg-gray-200 dark:bg-dark-900">📝</a-button> -->
        <a-button class="icon bg-gray-200 dark:bg-dark-900">
          <img class="w-2/3" src="@/assets/mj-180x180.png" alt="GPT-4" />
        </a-button>
        <h2 class="title">AI绘画(即将推出)</h2>
        <p class="details">
          创意与智能的完美融合， 唤醒您⼼中的艺术家，⼀笔⼀墨，点亮⽆限可能！
        </p>
      </article>
      <article class="feature dark:bg-dark">
        <!-- <a-button class="icon bg-gray-200 dark:bg-dark-900">💡</a-button> -->
        <a-button class="icon bg-gray-200 dark:bg-dark-900">
          <img class="w-2/3" src="@/assets/zs-180x180.png" alt="GPT-4" />
        </a-button>
        <h2 class="title">
          <a target="_blank" href="https://t.zsxq.com/0d9g9y277">知识星球</a>
        </h2>
        <p class="details">
          全年免费⽆限量使⽤ GPT-3.5Trubo 平台，掌握AI时代的⾼效能利器！<br />
          全⽹独家CHATGPT实战技能与商业应⽤，⾼⼿群内分享经验与答疑，助你链接优质⼈脉！
        </p>
      </article>
    </div>
    <div class="flex items-center justify-center mt-6 gap-x-6">
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
    </div>
  </a-scrollbar>
</template>

<style lang="less" scoped>
.home-logo__wrapper {
  @apply hidden flex-col lg:flex items-center justify-center text-primary  pt-2 lg:pt-4 lg:pt-10;
  .logo {
    @apply w-6 lg:w-10 h-6 lg:h-10;
  }

  .title {
    @apply text-base lg:text-xl;
  }
}
.feature-grid {
  @apply grid grid-cols-2 lg:grid-cols-2 w-full mx-auto gap-2 lg:gap-6  pt-2 lg:pt-4;
  .feature {
    @apply p-2 lg:p-4 rounded-md;
    background-color: var(--color-secondary);
    .icon {
      @apply text-sm h-6 w-6 lg:h-10 lg:w-10 lg:text-xl p-0 rounded-md;
    }
    .title {
      @apply text-sm lg:text-base dark:text-gray-300;
    }
    .details {
      @apply text-xs lg:text-sm  dark:text-gray-500;
    }
  }
}
</style>
