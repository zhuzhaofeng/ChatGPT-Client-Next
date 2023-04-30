/// <reference types="vite/client" />

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface Window {
  __MICRO_APP_NAME__: string
  [k: string]: any
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown
}

declare interface ViteEnv {
  // 项目标题
  VITE_APP_TITLE: string
  // 基础请求url
  VITE_BASE_URL: string
  // 本地服务端口
  VITE_PORT: number
  // 是否删除控制台打印
  VITE_DROP_CONSOLE: boolean
  // 本地存储Key前缀
  VITE_STORE_PREFIX: string
  // 开启功能列表
  VITE_FEATURES: string
  VITE_WECHAT_URL: string
}
