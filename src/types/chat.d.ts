/** 用户为user 机器人回答为assistant 系统预设为system */
export type RoleModel = 'user' | 'system' | 'assistant'
import type {
  ChatCompletionResponseMessage,
  CreateChatCompletionRequest,
  CreateChatCompletionResponse
} from 'openai'

export type ChatRequest = Partial<CreateChatCompletionRequest>
export type ChatReponse = Partial<CreateChatCompletionResponse>

export type ChatModel =
  // | 'gpt-4-32k-0314'
  // | 'gpt-4-32k'
  // | 'gpt-4-0314'
  | 'gpt-4'
  // | 'gpt-3.5-turbo-0301'
  | 'gpt-3.5-turbo'
// | 'text-davinci-003'
// | 'text-davinci-002'
// | 'text-curie-001'
// | 'text-babbage-001'
// | 'text-ada-001'
// | 'text-davinci-001'
// | 'davinci-instruct-beta'
// | 'davinci'
// | 'curie-instruct-beta'
// | 'curie'
// | 'ada'
// | 'babbage'

export interface MessageItem extends ChatCompletionResponseMessage {
  id: string
  date: number
  role: RoleModel
  content: string
  streaming?: boolean
  isError?: boolean
  conversation_id?: string
}

export interface ChatItem {
  id: string
  topic: string
  model?: ChatModel
  sendMemory: boolean
  messages: MessageItem[]
  lastUpdate: number
  lastSummarizeIndex: number
}

export type MessageModel =
  | {
      card?: string
      question: string
      model: ChatModel
      conversation_id?: string
      is_stream?: boolean
    }
  | {
      card?: string
      messages: Partial<MessageItem>[]
      model: ChatModel
      is_stream?: boolean
      temperature?: number
    }
