import { useConfigStore } from '@/store/config'
import type { MessageModel } from '@/types/chat'

const TIME_OUT_MS = 60 * 60 * 3

export async function requestChatTitle(
  sendMessage: MessageModel,
  onMessage: (message: string) => void
) {
  const controller = new AbortController()
  const reqTimeoutId = setTimeout(() => controller.abort(), TIME_OUT_MS)
  try {
    const configStore = useConfigStore()
    const res = await fetch(
      `${configStore.bootstrap.api}/v1/chat/completions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          path: `${configStore.bootstrap.api}/v1/chat/completions`
        },
        body: JSON.stringify(sendMessage)
      }
    )
    clearTimeout(reqTimeoutId)
    if (res.ok) {
      const text = await res.text()
      onMessage(text)
    }
  } catch (err) {
    console.error('NetWork Error', err)
  }
}

export async function requestChatStream(
  sendMessage: MessageModel,
  options?: {
    filterBot?: boolean
    onMessage: (message: string, done: boolean) => void
    onError: (error: Error, statusCode?: number) => void
    onController?: (controller: AbortController) => void
  }
) {
  const controller = new AbortController()
  const reqTimeoutId = setTimeout(() => controller.abort(), TIME_OUT_MS)
  try {
    const configStore = useConfigStore()
    const path = `${configStore.bootstrap.api}${CHAT_COMPLETIONS}`
    const res = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        path
      },
      body: JSON.stringify(sendMessage),
      signal: controller.signal
    })
    clearTimeout(reqTimeoutId)

    let responseText = ''

    const finish = () => {
      options?.onMessage(responseText, true)
      controller.abort()
    }

    if (res.ok) {
      const reader = res.body?.getReader()
      const decoder = new TextDecoder()

      options?.onController?.(controller)

      // eslint-disable-next-line no-constant-condition
      while (true) {
        // handle time out, will stop if no response in 10 secs
        const resTimeoutId = setTimeout(() => finish(), TIME_OUT_MS)
        const content = await reader?.read()
        clearTimeout(resTimeoutId)
        const text = decoder.decode(content?.value)
        responseText += text
        const done = !content || content.done
        options?.onMessage(responseText, false)
        if (done) {
          break
        }
      }
      finish()
    } else if (res.status === 401) {
      console.error('Anauthorized')
      options?.onError(new Error('Anauthorized'), res.status)
    } else if (res.status === 500) {
      const text = await res.text()
      options?.onError(new Error(text), res.status)
    } else {
      console.error('Stream Error', res.body)
      options?.onError(new Error('Stream Error'), res.status)
    }
  } catch (err) {
    console.error('NetWork Error', err)
    options?.onError(err as Error)
  }
}

export async function requestDrawImage(
  sendData: any,
  options?: {
    onSuccess: (data: {
      created: number
      data: { url: string; b64_json: string }[]
    }) => void
    onError: (error: Error, statusCode?: number) => void
    onController?: (controller: AbortController) => void
  }
) {
  const controller = new AbortController()
  const reqTimeoutId = setTimeout(() => controller.abort(), 300000)
  try {
    const configStore = useConfigStore()
    const path = `${configStore.bootstrap.api}${IMAGES_GENERATIONS}`
    const res = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendData),
      signal: controller.signal
    })
    clearTimeout(reqTimeoutId)

    if (res.ok) {
      const resp = await res.json()
      if (resp.code === 500) {
        options?.onError(new Error(resp.msg), resp.code)
      } else {
        // {"created":1682176988,"data":[{"url":""}]}
        options?.onSuccess(resp)
      }
    } else if (res.status === 401) {
      console.error('Anauthorized')
      options?.onError(new Error('Anauthorized'), res.status)
    } else if (res.status === 500) {
      const text = await res.json()
      options?.onError(new Error(text), res.status)
    } else {
      console.error('Stream Error', res.body)
      options?.onError(new Error('Stream Error'), res.status)
    }
  } catch (err) {
    console.error('NetWork Error', err)
    options?.onError(err as Error)
  }
}

export async function requestMjImage(
  sendData: any,
  options?: {
    onSuccess: (data: {
      image_id: string
      image_url: string
      actions: string[]
    }) => void
    onError: (error: Error, statusCode?: number) => void
  }
) {
  try {
    const configStore = useConfigStore()
    const path = `${configStore.bootstrap.api}${MJ_GENERATIONS}`
    const res = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendData)
    })

    if (res.ok) {
      const resp = await res.json()
      console.log(resp)
      if (resp.code === 500) {
        options?.onError(new Error(resp.msg), resp.code)
      } else {
        // {"created":1682176988,"data":[{"url":""}]}
        options?.onSuccess(resp)
      }
    } else if (res.status === 401) {
      console.error('Anauthorized')
      options?.onError(new Error('Anauthorized'), res.status)
    } else if (res.status === 500) {
      const text = await res.json()
      options?.onError(new Error(text), res.status)
    } else {
      console.error('Stream Error', res.body)
      options?.onError(new Error('Stream Error'), res.status)
    }
  } catch (err) {
    console.error('NetWork Error', err)
    options?.onError(err as Error)
  }
}
