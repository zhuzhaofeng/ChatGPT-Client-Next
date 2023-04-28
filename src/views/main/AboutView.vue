<script setup lang="ts"></script>

<template>
  <a-scrollbar
    outer-style="flex: 1; overflow: hidden;"
    class="overflow-y-auto h-full p-4 flex flex-col gap-y-2"
  >
    <div class="max-w-4xl w-full mx-auto">
      <a-breadcrumb class="my-6">
        <a-breadcrumb-item>
          <a-link @click="$router.back">
            <icon-arrow-left />
            返回
          </a-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>关于我们</a-breadcrumb-item>
      </a-breadcrumb>
      <div
        class="text-base leading-8 text-black dark:text-light-900 text-opacity-75"
      >
        欢迎使用 Ai 智能⼯具平台！
        <br />
        <br />
        我们是一支专业的人工智能团队，致力于为用户提供高效、便捷、智能的解决方案。
        <br />
        <br />
        我们的产品涵盖了智能问答、自动翻译、文案生成、智能写作、自动摘要和自动纠错等多个领域，能够满足您的不同需求。
        <br />
        <br />
        我们深入研究各种技术和算法，不断优化产品性能和用户体验，以确保您得到最好的服务。感谢您的信任和支持，我们将持续努力，为您带来更多惊喜和价值！
      </div>

      <div class="grid grid-cols-2 mt-6">
        <div class="flex flex-col items-center gap-y-2 py-2">
          <img
            class="max-w-60 w-3/4 border-solid border border-gray-200 p-1"
            alt="QQ"
            src="/QQ.png"
          />
          <!-- <div
            v-qr="'QQ群'"
            class="w-28 h-28"
            :key="layoutStore.themeMode"
          ></div> -->
          <span class="">QQ群</span>
        </div>
        <div class="flex flex-col items-center gap-y-2 py-2">
          <img
            class="max-w-60 w-3/4 border-solid border border-gray-200 p-1"
            alt="WeChat"
            src="/WeChat.png"
          />
          <!-- <div
            v-qr="'微信群'"
            class="w-28 h-28"
            :key="layoutStore.themeMode"
          ></div> -->
          <span class="">微信群</span>
        </div>
      </div>
    </div>
  </a-scrollbar>
</template>

<style scoped lang="less">
.setting-card {
  @apply bg-white rounded-md py-4 flex flex-col gap-y-4 px-6;
}
</style>
