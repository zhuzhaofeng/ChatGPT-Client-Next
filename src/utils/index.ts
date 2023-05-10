import type { MessageItem } from '@/types/chat'
export function createMessage(override: Partial<MessageItem>): MessageItem {
  return {
    id: genNonDuplicateID(),
    date: Date.now().valueOf(),
    role: 'user',
    content: '',
    ...override
  }
}

export function findConversationId(str: string = ''): string | undefined {
  // const str =  '[conversation_id:72279e5c-fb9d-4890-a25e-345c90677ae8]感谢大家一直以来对我们的支持，我们始终致力于提供更好的服务。全新版本已在内测阶段，即将正式推出！'
  const regex = /\[conversation_id:(.*?)\]/
  const match = str.match(regex)
  if (match) {
    return match[1]
  }
  return undefined
}
