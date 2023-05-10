/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-auto-import
export {}
declare global {
  const ALL_MODELS: typeof import('../src/config/index')['ALL_MODELS']
  const ALL_MODELS_MAX_TOKENS: typeof import('../src/config/index')['ALL_MODELS_MAX_TOKENS']
  const APP_TITLE: typeof import('../src/config/index')['APP_TITLE']
  const CHAT_COMPLETIONS: typeof import('../src/config/index')['CHAT_COMPLETIONS']
  const CHAT_COMPLETIONS_4: typeof import('../src/config/index')['CHAT_COMPLETIONS_4']
  const CHAT_COMPLETIONS_4_NEW: typeof import('../src/config/index')['CHAT_COMPLETIONS_4_NEW']
  const DRAW_PROMPT: typeof import('../src/config/index')['DRAW_PROMPT']
  const EffectScope: typeof import('vue')['EffectScope']
  const IMAGES_GENERATIONS: typeof import('../src/config/index')['IMAGES_GENERATIONS']
  const MJ_GENERATIONS: typeof import('../src/config/index')['MJ_GENERATIONS']
  const OPTIMIZE_DATA: typeof import('../src/config/index')['OPTIMIZE_DATA']
  const POINTS_MAP: typeof import('../src/config/index')['POINTS_MAP']
  const QUERY_CARD: typeof import('../src/config/index')['QUERY_CARD']
  const computed: typeof import('vue')['computed']
  const copyText: typeof import('../src/utils/copy')['copyText']
  const createApp: typeof import('vue')['createApp']
  const createMessage: typeof import('../src/utils/index')['createMessage']
  const customRef: typeof import('vue')['customRef']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const effectScope: typeof import('vue')['effectScope']
  const findConversationId: typeof import('../src/utils/index')['findConversationId']
  const genNonDuplicateID: typeof import('../src/utils/gid')['genNonDuplicateID']
  const genTitleTemplate: typeof import('../src/config/index')['genTitleTemplate']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const h: typeof import('vue')['h']
  const inject: typeof import('vue')['inject']
  const isAllWhitespace: typeof import('../src/utils/str')['isAllWhitespace']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeRouteLeave: typeof import('vue-router')['onBeforeRouteLeave']
  const onBeforeRouteUpdate: typeof import('vue-router')['onBeforeRouteUpdate']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const provide: typeof import('vue')['provide']
  const randomNumber: typeof import('../src/utils/random')['randomNumber']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const requestChatStream: typeof import('../src/utils/request')['requestChatStream']
  const requestChatTitle: typeof import('../src/utils/request')['requestChatTitle']
  const requestDrawImage: typeof import('../src/utils/request')['requestDrawImage']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const useAttrs: typeof import('vue')['useAttrs']
  const useBeforeunload: typeof import('../src/hooks/useBeforeunload')['useBeforeunload']
  const useCopyCode: typeof import('../src/hooks/useCopyCode')['useCopyCode']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useLink: typeof import('vue-router')['useLink']
  const useRequestChatStream: typeof import('../src/hooks/useRequestChatStream')['useRequestChatStream']
  const useRequestOptimizePrompt: typeof import('../src/hooks/useRequestChatStream')['useRequestOptimizePrompt']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useSlots: typeof import('vue')['useSlots']
  const useWindowSize: typeof import('../src/hooks/useWindowSize')['default']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Component, ComponentPublicInstance, ComputedRef, InjectionKey, PropType, Ref, VNode } from 'vue'
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface ComponentCustomProperties {
    readonly ALL_MODELS: UnwrapRef<typeof import('../src/config/index')['ALL_MODELS']>
    readonly ALL_MODELS_MAX_TOKENS: UnwrapRef<typeof import('../src/config/index')['ALL_MODELS_MAX_TOKENS']>
    readonly APP_TITLE: UnwrapRef<typeof import('../src/config/index')['APP_TITLE']>
    readonly CHAT_COMPLETIONS: UnwrapRef<typeof import('../src/config/index')['CHAT_COMPLETIONS']>
    readonly CHAT_COMPLETIONS_4: UnwrapRef<typeof import('../src/config/index')['CHAT_COMPLETIONS_4']>
    readonly CHAT_COMPLETIONS_4_NEW: UnwrapRef<typeof import('../src/config/index')['CHAT_COMPLETIONS_4_NEW']>
    readonly DRAW_PROMPT: UnwrapRef<typeof import('../src/config/index')['DRAW_PROMPT']>
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly IMAGES_GENERATIONS: UnwrapRef<typeof import('../src/config/index')['IMAGES_GENERATIONS']>
    readonly MJ_GENERATIONS: UnwrapRef<typeof import('../src/config/index')['MJ_GENERATIONS']>
    readonly OPTIMIZE_DATA: UnwrapRef<typeof import('../src/config/index')['OPTIMIZE_DATA']>
    readonly POINTS_MAP: UnwrapRef<typeof import('../src/config/index')['POINTS_MAP']>
    readonly QUERY_CARD: UnwrapRef<typeof import('../src/config/index')['QUERY_CARD']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly copyText: UnwrapRef<typeof import('../src/utils/copy')['copyText']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly createMessage: UnwrapRef<typeof import('../src/utils/index')['createMessage']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly findConversationId: UnwrapRef<typeof import('../src/utils/index')['findConversationId']>
    readonly genNonDuplicateID: UnwrapRef<typeof import('../src/utils/gid')['genNonDuplicateID']>
    readonly genTitleTemplate: UnwrapRef<typeof import('../src/config/index')['genTitleTemplate']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isAllWhitespace: UnwrapRef<typeof import('../src/utils/str')['isAllWhitespace']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeRouteLeave: UnwrapRef<typeof import('vue-router')['onBeforeRouteLeave']>
    readonly onBeforeRouteUpdate: UnwrapRef<typeof import('vue-router')['onBeforeRouteUpdate']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly randomNumber: UnwrapRef<typeof import('../src/utils/random')['randomNumber']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly requestChatStream: UnwrapRef<typeof import('../src/utils/request')['requestChatStream']>
    readonly requestChatTitle: UnwrapRef<typeof import('../src/utils/request')['requestChatTitle']>
    readonly requestDrawImage: UnwrapRef<typeof import('../src/utils/request')['requestDrawImage']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useBeforeunload: UnwrapRef<typeof import('../src/hooks/useBeforeunload')['useBeforeunload']>
    readonly useCopyCode: UnwrapRef<typeof import('../src/hooks/useCopyCode')['useCopyCode']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useLink: UnwrapRef<typeof import('vue-router')['useLink']>
    readonly useRequestChatStream: UnwrapRef<typeof import('../src/hooks/useRequestChatStream')['useRequestChatStream']>
    readonly useRequestOptimizePrompt: UnwrapRef<typeof import('../src/hooks/useRequestChatStream')['useRequestOptimizePrompt']>
    readonly useRoute: UnwrapRef<typeof import('vue-router')['useRoute']>
    readonly useRouter: UnwrapRef<typeof import('vue-router')['useRouter']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly useWindowSize: UnwrapRef<typeof import('../src/hooks/useWindowSize')['default']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
  }
}
