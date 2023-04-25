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
  const url = `${configStore.bootstrap.api}${CHAT_COMPLETIONS}`
  await axios
    .post(url, sendMessage, {
      responseType: 'stream',
      timeout: 30000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      signal: controller.signal,
      onDownloadProgress(evt) {
        options?.onMessage(evt?.event?.target?.responseText, false)
      }
    })
    .then(res => {
      options?.onMessage(res?.data, true)
    })
    .catch(e => {
      options?.onError(e, e?.response?.status)
    })
}
