import { Message } from '@arco-design/web-vue'
import { defineStore } from 'pinia'

import { requestDrawImage, requestMjImage } from '@/utils/request'

import { useConfigStore } from './config'

export const useDrawStore = defineStore(
  '__AI_1024_STORE_DRAW',
  () => {
    const configStore = useConfigStore()
    const loading = ref(false)
    const mjImage = ref<{
      image_id: string
      image_url: string
      prompt: string
      date: number
      actions: string[]
    }>({
      date: 1683130381673,
      prompt: '',
      image_id: '',
      image_url: '',
      actions: []
    })
    const dallEImage = ref<{
      prompt: string
      size: string
      urls: string[]
      date: number
    }>()
    onMounted(() => {})

    const mjGenAction = (req: any) => {
      loading.value = true
      requestMjImage(
        { ...req, card: configStore.card },
        {
          onSuccess(resp) {
            loading.value = false
            console.log(resp)
            mjImage.value = {
              ...resp,
              prompt: req.prompt,
              date: new Date().getDate()
            }
            // dallEImage.value = {
            //   prompt: req.prompt,
            //   size: req.size,
            //   urls: resp.data.map(item => item.url),
            //   date: resp.created
            // }
          },
          onError(error) {
            loading.value = false
            Message.error(error?.message ?? '')
          }
        }
      )
    }
    const imageDrawAction = (req: {
      size: string
      prompt: string
      n: number
      response_format: string
    }) => {
      loading.value = true
      requestDrawImage(
        { ...req, card: configStore.card },
        {
          onController(controller) {
            console.log(controller)
          },
          onSuccess(resp) {
            loading.value = false
            dallEImage.value = {
              prompt: req.prompt,
              size: req.size,
              urls: resp.data.map(item => item.url),
              date: resp.created
            }
          },
          onError(error) {
            loading.value = false
            Message.error(error?.message ?? '')
          }
        }
      )
    }
    return {
      dallEImage,
      loading,
      imageDrawAction,
      mjGenAction,
      mjImage
    }
  },
  {
    persist: {
      storage: sessionStorage,
      paths: ['dallEImage', 'mjImage']
    }
  }
)
