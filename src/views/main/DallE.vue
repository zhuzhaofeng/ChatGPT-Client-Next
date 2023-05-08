<script setup lang="tsx">
const { isMobileScreen } = useWindowSize()

import { Message, Modal } from '@arco-design/web-vue'
import { chunk } from 'lodash-es'

import { useDrawStore } from '@/store/draw'

const formState = reactive({
  prompt: '',
  size: '256x256',
  n: 1,
  response_format: 'url'
  // response_format: 'b64_json'
})
const drawPromptIndex = ref(0)
const currentDrawPrompt = computed(
  () => chunk(DRAW_PROMPT, 2)[drawPromptIndex.value]
)
const handleChangeKeyword = () => {
  const drawPromptChunk = chunk(DRAW_PROMPT, 2)
  const maxIndex = drawPromptChunk.length - 1
  const nextIndex =
    drawPromptIndex.value + 1 > maxIndex ? 0 : drawPromptIndex.value + 1
  drawPromptIndex.value = nextIndex
}

const drawStore = useDrawStore()
const loading = computed(() => drawStore.loading)

onBeforeRouteLeave(async () => {
  if (!loading.value) return true
  return await new Promise<boolean>((resolve, reject) => {
    Modal.warning({
      title: '提示',
      okText: '离开',
      hideCancel: false,
      content:
        'AI已经开始处理您的请求，此时刷新或离开页面，也会造成您的积分扣除，确定刷新或离开吗？',
      onOk() {
        resolve(true)
      },
      onCancel() {
        reject(false)
      }
    })
  })
})
const handleDrawImage = () => {
  if (formState.prompt.trim().length < 1) {
    Message.error('关键词不能为空')
    return
  }
  drawStore.imageDrawAction(formState)
}
const dallEImage = computed(() => drawStore.dallEImage)
const previewVisible = ref(false)
const { downloadImage } = useImageDownloader()
</script>

<template>
  <a-scrollbar
    outer-style="flex: 1; overflow: hidden;"
    class="overflow-y-auto h-full p-4 flex flex-col gap-y-2"
  >
    <div class="draw-view" :class="{ 'is-mobile': isMobileScreen }">
      <a-alert type="info" class="max-w-max mx-auto rounded-full text-xs">
        <template #icon>
          <icon-exclamation-circle-fill />
        </template>
        根据输入关键词生成~大约需要30s左右时间,每张图片 20 积分
      </a-alert>

      <div class="flex items-center gap-x-5">
        <a-typography-text class="h-12 flex items-center" bold>
          关键词示例
        </a-typography-text>
        <a-button type="text" size="mini" @click="handleChangeKeyword">
          <icon-loop />
        </a-button>
      </div>
      <div
        v-for="item in currentDrawPrompt"
        :key="item.tag"
        class="flex items-center gap-x-1 mb-2"
      >
        <mark class="text-xs px-2 py-1"> {{ item.tag }}</mark>
        <a-typography-paragraph type="secondary" copyable class="mb-0">
          {{ item.keywords }}
        </a-typography-paragraph>
      </div>
      <a-input-search
        :loading="loading"
        class="w-full mt-4"
        size="large"
        autofocus
        v-model="formState.prompt"
        placeholder="请用中文输入关键词如上，参考形式: 画面主体，细节描述，修饰词"
        search-button
        @search="handleDrawImage"
      >
        <template #button-icon>
          <icon-robot />
        </template>
        <template #button-default>生成</template>
      </a-input-search>

      <a-form
        :model="formState"
        :class="{ 'is-mobile': isMobileScreen }"
        :label-col-props="{ span: isMobileScreen ? 24 : undefined }"
        :auto-label-width="!isMobileScreen"
        label-align="left"
        class="mt-4 p-4 bg-light-300 dark:bg-dark-900 rounded"
      >
        <a-typography-text class="block" bold> 参数设置 </a-typography-text>
        <a-form-item label="图片尺寸" class="mb-2">
          <!-- <a-radio-group v-model="formState.size" type="button"> -->
          <div
            class="w-full"
            :class="{ 'grid grid-cols-2 gap-y-2': isMobileScreen }"
          >
            <a-radio
              class="min-w-max"
              v-model="formState.size"
              type="button"
              value="256x256"
            >
              256x256(小图)
            </a-radio>
            <a-radio
              class="min-w-max"
              v-model="formState.size"
              type="button"
              value="512x512"
            >
              512x512(中图)
            </a-radio>
            <a-radio
              class="min-w-max"
              v-model="formState.size"
              type="button"
              value="1024x1024"
            >
              1024x1024(大图)
            </a-radio>
          </div>
          <!-- </a-radio-group> -->
        </a-form-item>
        <a-form-item validate-status="warning" label="图片数量" class="mb-2">
          <div
            class="w-full"
            :class="{ 'grid grid-cols-5 gap-y-2': isMobileScreen }"
          >
            <a-radio
              class="min-w-max"
              v-model="formState.n"
              type="button"
              v-for="i in 10"
              :key="i"
              :value="i"
            >
              {{ i }}张
            </a-radio>
          </div>
        </a-form-item>
      </a-form>
      <div class="flex flex-col items-start gap-y-3">
        <a-divider orientation="center"> 结果区域 </a-divider>
        <a-alert type="warning">
          <div class="flex flex-col gap-1">
            <a-typography-text class="text-xs font-semibold" type="secondary">
              仅保存最近一次生成记录, 关闭浏览器不保存, 请及时下载
            </a-typography-text>
            <a-typography-text class="text-xs" type="secondary">
              在电脑浏览器中，可以通过右键点击图片并选择“另存为”选项将图片保存到本地。
            </a-typography-text>
            <a-typography-text class="text-xs" type="secondary">
              在手机浏览器中，可以通过长按图片并选择“保存图片”选项将图片保存到本地。
            </a-typography-text>
          </div>
        </a-alert>
        <div v-if="dallEImage?.date" class="flex items-center gap-3 flex-wrap">
          <a-image-preview-group infinite>
            <a-image
              v-for="url in dallEImage?.urls || []"
              :key="url"
              :width="256"
              show-loader
              class="min-h-40"
              :src="url"
            >
            </a-image>
          </a-image-preview-group>
        </div>
      </div>
    </div>
    <!-- <div
      class="mt-4 p-4 bg-light-300 dark:bg-dark-900 rounded"
      v-if="dallEImage?.date"
    >
      <div class="flex items-center gap-x-6">
        <span
          :style="{ color: 'var(--color-text-3)' }"
          v-date-time="dallEImage.date * 1000"
        ></span>
        <a-tag color="red" size="small" class="rounded-full">
          {{ dallEImage.urls.length }}张
        </a-tag>
        <a-alert type="info" class="w-auto rounded-full text-xs my-4">
          <template #icon>
            <icon-exclamation-circle-fill />
          </template>
          尺寸: {{ dallEImage.size }}
        </a-alert>
      </div>

      <a-divider class="m-0 mb-6"></a-divider>
      <a-image-preview-group infinite>
        <div
          class="grid gap-3"
          :class="[isMobileScreen ? 'grid-cols-2' : 'grid-cols-5']"
        >
          <a-image
            v-for="url in dallEImage?.urls || []"
            :key="url"
            :src="url"
          />
        </div>
      </a-image-preview-group>
    </div> -->
  </a-scrollbar>
</template>

<style scoped lang="less">
.draw-view {
  @apply max-w-4xl w-full mx-auto bg-white dark:bg-dark p-10 rounded-lg shadow-lg;
  &.is-mobile {
    @apply p-4;
    :deep(.arco-radio-button) {
      &::before {
        display: none;
      }
    }
  }
  :deep(.arco-image-footer) {
    background-color: rgba(0, 0, 0, 0.75);
    @apply hidden overflow-hidden h-0 p-0;
    .arco-image-footer-extra {
      @apply px-0 w-full;
      .actions {
        @apply w-full flex items-center justify-around;
        .action {
          @apply text-lg cursor-pointer;
        }
      }
    }
  }
}
</style>
