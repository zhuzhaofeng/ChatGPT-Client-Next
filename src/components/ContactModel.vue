<script setup lang="ts">
import { useLayoutStore } from '@/store/layout'

const layoutStore = useLayoutStore()
const visible = ref(false)

watch(
  () => layoutStore.isShowContact,
  v => {
    visible.value = v
  },
  { immediate: true }
)

const handleCloseContactModel = () => {
  visible.value = false
  layoutStore.changeShowContactAction(false)
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
        <img class="w-6 h-6" src="@/assets/openai.svg" alt="1024 智能 AI" />
        <h1 class="text-base m-0">1024 智能 AI</h1>
      </div>
    </template>
    <div>
      一款<mark>便捷的</mark>、<mark>免登录</mark>和<mark>无需魔法</mark>的ChatGPT工具
    </div>
    <div>
      网址经常变更，所以使用前一定要记得先加群！！！ 群内不定时
      <mark>发放免费积分卡</mark>
    </div>
    <div>
      积分卡购买地址：
      <a href="https://www.houfaka.com/links/193B8193" target="_blank">
        https://www.houfaka.com/links/193B8193
      </a>
    </div>
    <br />
    <div>
      平时如没有特殊需要，建议使用
      <b>gpt-3.5-turbo</b>即可，<b>gpt-3.5-turbo</b>完全能应对大部分场景
    </div>
    <div>
      <b>gpt-4.0</b>
      成本非常昂贵，是<b>gpt-3.5-turbo</b>的
      <b>30-60倍</b>，反应时间也不如
      <b>gpt-3.5-turbo</b>
    </div>
    <br />
    <div>
      大家多多支持，你们的支持才是我们的动力，即将推出语音聊天与绘画功能，敬请期待！！！
    </div>
    <br />
    <div class="grid grid-cols-2">
      <div class="flex flex-col items-center gap-y-2 py-2">
        <img
          class="max-w-11/12 border-solid border border-gray-200 p-1"
          alt="QQ"
          src="/assets/QQ.png"
        />
        <span class="">QQ群</span>
      </div>
      <div class="flex flex-col items-center gap-y-2 py-2">
        <img
          class="max-w-11/12 border-solid border border-gray-200 p-1"
          alt="WeChat"
          src="/assets/WeChat.png"
        />
        <span class="">微信群</span>
      </div>
    </div>
    <template #footer>
      <div class="flex items-center justify-center">
        <a-button @click="handleCloseContactModel" type="primary">
          我已加入
        </a-button>
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
