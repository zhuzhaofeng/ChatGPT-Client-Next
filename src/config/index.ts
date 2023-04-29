import type { ChatModel } from '@/types/chat'

export const APP_TITLE = import.meta.env.VITE_APP_TITLE
export const ALL_MODELS: ChatModel[] = [
  // 'gpt-4-32k-0314',
  // 'gpt-4-32k',
  // 'gpt-4-0314',
  'gpt-4',
  // 'gpt-3.5-turbo-0301',
  'gpt-3.5-turbo'
  // 'text-davinci-003',
  // 'text-davinci-002',
  // 'text-curie-001',
  // 'text-babbage-001',
  // 'text-ada-001',
  // 'text-davinci-001',
  // 'davinci-instruct-beta',
  // 'davinci',
  // 'curie-instruct-beta',
  // 'curie',
  // 'ada',
  // 'babbage'
]

export const POINTS_MAP: Record<ChatModel, number> = {
  'gpt-4': 20,
  'gpt-3.5-turbo': 3,
  'gpt-4-32k-0314': 0,
  'gpt-4-32k': 0,
  'gpt-4-0314': 0,
  'gpt-3.5-turbo-0301': 0,
  'text-davinci-003': 0,
  'text-davinci-002': 0,
  'text-curie-001': 0,
  'text-babbage-001': 0,
  'text-ada-001': 0,
  'text-davinci-001': 0,
  'davinci-instruct-beta': 0,
  davinci: 0,
  'curie-instruct-beta': 0,
  curie: 0,
  ada: 0,
  babbage: 0
}

// openai.GPT3Dot5Turbo0301:   4096,
// openai.GPT4:                8192,
// openai.GPT40314:            8192,
// openai.GPT432K:             32768,
// openai.GPT432K0314:         32768,
// openai.CodexCodeDavinci002: 8001,
// openai.CodexCodeDavinci001: 8001,
// openai.CodexCodeCushman001: 2048,
// openai.GPT3TextDavinci003:  4097,
// openai.GPT3TextDavinci002:  4097,
// openai.GPT3TextCurie001:    2049,
// openai.GPT3TextBabbage001:  2049,
// openai.GPT3TextAda001:      2049,
// openai.GPT3Davinci:         2049,
// openai.GPT3Curie:           2049,
// openai.GPT3Ada:             2049,
// openai.GPT3Babbage:         2049,
export const ALL_MODELS_MAX_TOKENS: Record<ChatModel, number> = {
  'gpt-4-32k-0314': 32768,
  'gpt-4-32k': 32768,
  'gpt-4-0314': 1000,
  'gpt-4': 1000,
  'gpt-3.5-turbo-0301': 4096,
  'gpt-3.5-turbo': 4096,
  'text-davinci-003': 4097,
  'text-davinci-002': 8001,
  'text-davinci-001': 8001,
  'text-curie-001': 2049,
  'text-babbage-001': 2049,
  'text-ada-001': 2049,
  'davinci-instruct-beta': 2049,
  davinci: 2049,
  'curie-instruct-beta': 2049,
  curie: 2049,
  ada: 2049,
  babbage: 2049
}

export const genTitleTemplate =
  '使用四到五个字直接返回这句话的简要主题，不要解释、不要标点、不要语气词、不要多余文本，如果没有主题，请直接返回“闲聊”'

/** POST 聊天接口 */
export const CHAT_COMPLETIONS = '/v1/chat/completions'

/** GET 查询卡密积分 */
export const QUERY_CARD = '/v1/card'

/** POST 图片生成 */
export const IMAGES_GENERATIONS = '/v1/images/generations'

export const DRAW_PROMPT = [
  {
    tag: '未来科技',
    keywords: '高科技、未来技术、智能化、机器人、自动化、人工智能、机器学习'
  },
  {
    tag: '自然生态',
    keywords: '大自然、环境保护、生态平衡、气候变化、可持续发展、生物多样性'
  },
  {
    tag: '艺术文化',
    keywords: '艺术创作、绘画、摄影、雕塑、老文明、历史遗迹、传统手工艺、博物馆'
  },
  {
    tag: '时尚美妆',
    keywords: '时尚、美妆、个人风格、服装设计、时装周、红毯盛典'
  },
  {
    tag: '美食文化',
    keywords: '食品、美食文化、烹饪技艺、餐饮业、营养健康、美食分享'
  },
  {
    tag: '旅游文化',
    keywords: '旅游、景点、旅行体验、文化交流、民俗风情、地方特色'
  },
  {
    tag: '数字化生活',
    keywords: '社交媒体、数字化、网络文化、在线教育、游戏娱乐、移动支付'
  },
  {
    tag: '娱乐休闲',
    keywords: '电影、电视剧、综艺节目、音乐会、演唱会、运动会'
  },
  {
    tag: '商业经济',
    keywords: '商业、经济、金融、股票、基金、保险、创业、创新、投资、贸易'
  },
  {
    tag: '教育培训',
    keywords: '教育、培训、学习、教育科技、校园生活、学生社团、研究生活'
  },
  {
    tag: '科学研究',
    keywords: '科学、研究、实验室、科学家、科学成果、学术交流、科学普及'
  },
  {
    tag: '数字艺术',
    keywords: '数码艺术、VR艺术、游戏美术、互动媒体、AR/VR技术'
  }
]
