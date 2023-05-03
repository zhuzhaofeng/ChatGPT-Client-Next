<script setup lang="tsx">
const { isMobileScreen } = useWindowSize()

import { Message, Modal } from '@arco-design/web-vue'

import { useConfigStore } from '@/store/config'
import { useDrawStore } from '@/store/draw'

const optimizeLoading = ref(false)
const content = ref('')
const formState = reactive({
  // 积分卡
  // 动作：generate， 目前取generate即可。 允许的值：generate,upsample1,upsample2,upsample3,upsample4,variation1,variation2,variation3,variation4
  action: 'generate',
  // 内容描述
  prompt: '',
  // 图片id，目前传空即可
  image_id: undefined
})

const configStore = useConfigStore()
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
    Message.error('Prompt不能为空')
    return
  }
  drawStore.mjGenAction(formState)
}

const mjImage = computed(() => drawStore.mjImage)
const previewVisible = ref(false)

const handleOptimizePrompt = () => {
  if (content.value.trim().length < 1) {
    Message.error('描述不能为空')
    return
  }
  optimizeLoading.value = true
  useRequestOptimizePrompt(
    OPTIMIZE_DATA(
      content.value,
      configStore.cardInfo?.enable ? configStore.card : undefined
    ) as any
  )
    .then(res => {
      console.log(res)
      if (res.status === 200) {
        formState.prompt = res?.data || ''
      }
    })
    .catch(e => {
      Message.error('优化失败, 请重试~')
    })
    .finally(() => {
      optimizeLoading.value = false
    })
}
</script>

<template>
  <a-spin
    class="h-full overflow-hidden"
    :loading="optimizeLoading || loading"
    :tip="
      optimizeLoading
        ? 'GPT 优化中, 请稍候...'
        : 'Midjourney绘图中,时间可能稍长, 请耐心等待...'
    "
  >
    <a-scrollbar
      outer-style="height: 100%; overflow: hidden;"
      class="overflow-y-auto h-full p-4 flex flex-col gap-y-2"
    >
      <div class="draw-view" :class="{ 'is-mobile': isMobileScreen }">
        <a-alert type="info" class="max-w-max mx-auto rounded-full text-xs">
          <template #icon>
            <icon-exclamation-circle-fill />
          </template>
          根据输入关键词生成~大约需要10秒 - 10分钟左右时间, 每次生成消耗 35 积分
        </a-alert>
        <div class="flex flex-col relative items-start gap-y-2 mt-10">
          <a-textarea
            :loading="loading"
            autofocus
            v-model="content"
            placeholder="请输入描述, 支持中文,通过ChatGPT3.5优化"
            class="w-full"
            :auto-size="{ minRows: 2, maxRows: 5 }"
          />

          <a-button
            type="outline"
            :disabled="!content.trim()"
            @click="handleOptimizePrompt"
          >
            <template #icon>
              <icon-robot />
            </template>
            立即优化
          </a-button>
        </div>
        <div class="flex flex-col relative items-start gap-y-2 mt-4">
          <a-textarea
            :loading="loading"
            autofocus
            v-model="formState.prompt"
            placeholder="输入 Midjourney 的 Prompt 仅支持英文"
            class="w-full"
            :auto-size="{ minRows: 2, maxRows: 5 }"
          />

          <a-button
            :disabled="!formState.prompt.trim()"
            type="primary"
            @click="handleDrawImage"
          >
            <template #icon>
              <icon-robot />
            </template>
            即刻生成
          </a-button>
        </div>
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

          <a-image
            v-if="mjImage?.image_id"
            class="block mx-auto min-h-40"
            width="300"
            show-loader
            :src="mjImage.image_url"
          >
          </a-image>
        </div>
      </div>
    </a-scrollbar>
  </a-spin>
</template>

<style scoped lang="less">
.draw-view {
  @apply max-w-4xl w-full mx-auto bg-white dark:bg-dark p-10 rounded-lg shadow-lg;
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
