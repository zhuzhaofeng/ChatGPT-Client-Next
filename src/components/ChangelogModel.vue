<script setup lang="ts">
import { useLayoutStore } from '@/store/layout'

const layoutStore = useLayoutStore()
const visible = ref(false)

watch(
  () => layoutStore.isShowLog,
  v => {
    visible.value = v
  },
  { immediate: true }
)

const handleCloseContactModel = () => {
  visible.value = false
  layoutStore.changeShowLogAction(false)
}
</script>

<template>
  <a-modal
    class="contact-model"
    :esc-to-close="false"
    :mask-closable="false"
    title-align="start"
    :visible="false"
    @close="handleCloseContactModel"
  >
    <template #title>
      <div class="header-logo gap-x-2">
        <img class="w-6 h-6" src="@/assets/openai.svg" alt="1024 智能 AI" />
        <h1 class="text-base m-0">1024 智能 AI</h1>
      </div>
    </template>
    <div>
      <a-typography-title :heading="1" class="text-lg mb-6 text-center mt-0">
        全新GPT-4升级来袭！！！
      </a-typography-title>
      <ul class="p-0 m-0 list-decimal ml-4">
        <li>更优质体验：无上下文条数限制，无token限制</li>
        <li>更实惠的价格：调整至每次仅需50积分</li>
        <li>提升了网络速度，让用户能够更快速地获得所需信息。</li>
        <li>优化了gpt-4的使用体验。</li>
        <li>修复了历史消息超长导致的回复一半的问题。</li>
        <li>提升了部分体验，包括但不限于用户界面的优化和交互体验的改进。</li>
      </ul>
      <a-divider />
      <!-- <a-typography-title :heading="1" class="text-base">
        我们即将准备上线的功能：
      </a-typography-title> -->
      <p>
        感谢大家一直以来对我们的支持，我们始终致力于提供更好的服务。全新版本已在内测阶段，即将正式推出！
      </p>
      <ul class="p-0 m-0 list-decimal ml-4">
        <li>全新UI设计</li>
        <li>语音聊天功能</li>
        <li>AI绘画技术（DALL-E，Midjourney）</li>
        <li>推广返利活动</li>
        <li>便捷登录与数据同步</li>
      </ul>
    </div>
    <template #footer>
      <div class="flex items-center justify-end">
        <a-button @click="handleCloseContactModel"> 关闭 </a-button>
      </div>
    </template>
  </a-modal>
</template>

<style lang="less">
.contact-model {
  width: 100%;
  .arco-modal {
    width: 90%;
    max-width: 640px;
  }
}
</style>
