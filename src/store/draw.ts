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
      prompt:
        'The concept of the picture is a beautiful female warrior in a sailor uniform holding a machine gun. The photo is taken with a Canon EOS 5D Mark IV with a 50mm lens. The parameters are set to capture the details of the uniform and the machine gun, while still having a slightly blurred background. The photo style is bold and dynamic, with a hint of vintage. The color tone is slightly desaturated to give a more rugged feel. The lighting is dramatic, with a strong backlight to highlight the silhouette of the warrior. The atmosphere is intense, with a sense of danger and action. The composition is centered on the warrior, with the machine gun and uniform taking up most of the frame.',
      image_id: '1103346081670115419',
      image_url:
        'https://midjourney.cdn.zhishuyun.com/attachments/1100463152530989130/1103352665959841882/furo_ignoreeab1a28b-11ce-4925-84f6-c906a91d2762_The_concept_of__1d7064bc-d3db-4527-b806-7412ee11765b.png',
      actions: [
        'upsample1',
        'upsample2',
        'upsample3',
        'upsample4',
        'variation1',
        'variation2',
        'variation3',
        'variation4'
      ]
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
