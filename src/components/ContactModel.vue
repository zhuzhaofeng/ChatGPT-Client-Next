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
        <img class="w-6 h-6" src="@/assets/logo.svg" :alt="APP_TITLE" />
        <h1 class="text-base m-0">{{ APP_TITLE }}</h1>
      </div>
    </template>
    <div class="text-center">高速、稳定、国内直接访问的ChatGPT平台</div>
    <div class="text-center">扫码进群，群内每日分享 Ai 工具应用技能</div>
    <br />
    <div
      class="flex flex-col justify-center items-center gap-y-2 py-2 max-w-1/2 mx-auto"
    >
      <img
        class="max-w-11/12 border-solid border border-gray-200 p-1"
        alt="WeChat"
        src="/WeChat.png"
      />
      <span class="">微信群</span>
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
