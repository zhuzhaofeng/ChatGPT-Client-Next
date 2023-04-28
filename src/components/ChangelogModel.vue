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
    v-model:visible="visible"
    @close="handleCloseContactModel"
  >
    <template #title>
      <div class="header-logo gap-x-2">
        <img class="w-6 h-6" src="@/assets/openai.svg" alt="Ai 智能⼯具平台" />
        <h1 class="text-base m-0">Ai 智能⼯具平台</h1>
      </div>
    </template>
    <div>
      <a-typography-title :heading="1" class="text-base mt-0">
        本次更新主要针对用户反馈的问题进行了修复和优化：
      </a-typography-title>
      <ul class="p-0 m-0 list-decimal ml-6">
        <li>修复了部分浏览器无法识别返回的内容和空返回问题。</li>
        <li>修复了网络或其他错误引起的误积分现象。</li>
        <li>提升了网络速度，让用户能够更快速地获得所需信息。</li>
        <li>优化了gpt-4的使用体验。</li>
        <li>修复了历史消息超长导致的回复一半的问题。</li>
        <li>提升了部分体验，包括但不限于用户界面的优化和交互体验的改进。</li>
        <li>.......</li>
      </ul>
      <a-typography-title :heading="1" class="text-base">
        我们即将准备上线的功能：
      </a-typography-title>
      <ul class="p-0 m-0 list-decimal ml-6">
        <li>DALL-E 绘画功能</li>
        <li>Midjourney 绘画功能</li>
        <li>AI语音聊天，AI语音文字识别功能</li>
        <li>用户登陆注册，个人中心等</li>
        <li>代理分销，邀请奖励积分</li>
        <li>.......</li>
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
