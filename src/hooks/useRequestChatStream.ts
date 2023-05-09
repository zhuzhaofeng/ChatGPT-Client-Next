import axios from 'axios'

import { useConfigStore } from '@/store/config'
import type { MessageModel } from '@/types/chat'

export async function useRequestChatStream(
  sendMessage: MessageModel,
  options?: {
    onMessage: (message: string, done: boolean) => void
    onError: (error: Error, statusCode?: number) => void
    onController?: (controller: AbortController) => void
  }
) {
  const controller = new AbortController()
  if (options?.onController) {
    options.onController(controller)
  }
  const configStore = useConfigStore()
  const url3 = `${configStore.bootstrap.api}${CHAT_COMPLETIONS}`
  const url4 = `${configStore.bootstrap.api}${CHAT_COMPLETIONS_4}`
  await axios
    .post(sendMessage.model === 'gpt-4' ? url4 : url3, sendMessage, {
      responseType: 'stream',
      timeout: sendMessage.model === 'gpt-4' ? 10 * 60 * 1000 : 3 * 60 * 1000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      signal: controller.signal,
      onDownloadProgress(evt) {
        // console.log(evt)
        if (evt?.event?.target?.status === 200) {
          options?.onMessage(evt?.event?.target?.responseText, false)
        } else {
          options?.onError(evt?.event?.target, evt?.event?.target?.status)
        }
      }
    })
    .then(res => {
      let data: any = ''
      try {
        data = JSON.parse(res?.data)
      } catch (error) {
        data = res.data
      }
      // console.log(data)
      if (data?.code === 500) {
        options?.onError(data?.msg, 5055)
      } else {
        options?.onMessage(res?.data, true)
      }
    })
    .catch(e => {
      options?.onError(e, e?.response?.status)
    })
}

export async function useRequestOptimizePrompt(sendMessage: MessageModel) {
  const controller = new AbortController()
  const configStore = useConfigStore()
  return axios.post(
    `${configStore.bootstrap.api}${CHAT_COMPLETIONS}`,
    sendMessage,
    {
      responseType: 'stream',
      timeout: 3 * 60 * 1000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      signal: controller.signal
    }
  )
}
