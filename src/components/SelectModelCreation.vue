<script setup lang="tsx">
import { useChatStore } from '@/store/chat'
import { useLayoutStore } from '@/store/layout'
import type { ChatModel } from '@/types/chat'
const visible = ref(false)
const layoutStore = useLayoutStore()
const chatStore = useChatStore()
const { isMobileScreen } = useWindowSize()

const model = ref<ChatModel>('gpt-3.5-turbo')
const models: { key: ChatModel; desc: string }[] = [
  {
    key: 'gpt-3.5-turbo',
    desc: '人工智能聊天工具，模拟人类思维，适用于多种语境。'
  },
  {
    key: 'gpt-4',
    desc: '延续 Chat GPT 系列，以更先进的架构提供更多样的自然语言生成服务。'
  }
]

const handleClick = () => {
  visible.value = true
}
const handleOk = () => {
  visible.value = false
  chatStore.newChatAction(model.value)
  layoutStore.toggleCollapsedAction(false)
}
const handleCancel = () => {
  visible.value = false
}
</script>

<template>
  <div @click="handleClick" class="w-full">
    <slot></slot>
  </div>
  <a-modal
    v-model:visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    :modal-style="{ 'max-width': '80%' }"
    okText="创建"
  >
    <template #title>选择模型</template>
    <a-radio-group v-model="model" class="flex flex-col gap-y-4 items-stretch">
      <template v-for="item in models" :key="item">
        <a-radio :value="item.key" class="mr-0">
          <template #radio="{ checked }">
            <a-space
              align="center"
              class="custom-radio-card"
              :class="{ 'custom-radio-card-checked': checked }"
            >
              <div class="custom-radio-card-mask">
                <div class="custom-radio-card-mask-dot" />
              </div>
              <div class="flex flex-col">
                <div
                  class="flex gap-x-6"
                  :class="
                    isMobileScreen
                      ? 'flex-col items-start mb-2'
                      : 'flex-row items-center'
                  "
                >
                  <div class="custom-radio-card-title">
                    {{ item.key }}
                  </div>
                  <a-badge
                    status="warning"
                    :text="`每次消耗${POINTS_MAP[item.key]}积分!`"
                  />
                </div>
                <a-typography-text class="text-xs" type="secondary">
                  {{ item.desc }}
                </a-typography-text>
              </div>
            </a-space>
          </template>
        </a-radio>
      </template>
    </a-radio-group>
  </a-modal>
</template>

<style scoped>
.custom-radio-card {
  @apply p-5 rounded box-border w-full transition-all;
  border: 1px solid var(--color-border-2);
}

.custom-radio-card-mask {
  height: 14px;
  width: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid var(--color-border-2);
  box-sizing: border-box;
}

.custom-radio-card-mask-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
}

.custom-radio-card-title {
  width: 145px;
  color: var(--color-text-1);
  font-size: 14px;
  font-weight: bold;
}

.custom-radio-card:hover,
.custom-radio-card-checked,
.custom-radio-card:hover .custom-radio-card-mask,
.custom-radio-card-checked .custom-radio-card-mask {
  border-color: rgb(var(--primary-6));
}

.custom-radio-card-checked {
  background-color: var(--color-primary-light-1);
}

.custom-radio-card:hover .custom-radio-card-title,
.custom-radio-card-checked .custom-radio-card-title {
  color: rgb(var(--primary-6));
}

.custom-radio-card-checked .custom-radio-card-mask-dot {
  background-color: rgb(var(--primary-6));
}
</style>
