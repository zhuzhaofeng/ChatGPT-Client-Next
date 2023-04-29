import { defineStore } from 'pinia'

import type { ThemeMode } from '@/types/theme'

export const useLayoutStore = defineStore(
  '__AI_1024_STORE_LAYOUT',
  () => {
    // 联系我们弹窗
    const isShowLog = ref(false)
    // 联系我们弹窗
    const isShowContact = ref(true)
    const collapsed = ref(false)

    // 顶部设置是否显示
    const headerSettingCollapsed = ref(true)

    const themeMode = ref<ThemeMode>('light')

    useWindowSize(() => {
      collapsed.value = false
    })

    // 切换主题模式
    function changeModeAction(mode: ThemeMode) {
      themeMode.value = mode
    }
    // 切顶部是否显示
    const toggleHeaderCollapsedAction = () => {
      headerSettingCollapsed.value = !headerSettingCollapsed.value
    }

    // 监听主题模式的变化
    watchEffect(() => {
      if (themeMode.value === 'dark') {
        document.documentElement.classList.add('dark')

        document.body.setAttribute('arco-theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.body.removeAttribute('arco-theme')
      }
    })

    const changeShowContactAction = (payload: boolean) => {
      isShowContact.value = payload
    }
    const changeShowLogAction = (payload: boolean) => {
      isShowLog.value = payload
    }

    const toggleCollapsedAction = (payload?: boolean) => {
      collapsed.value = payload !== undefined ? payload : !collapsed.value
    }

    return {
      collapsed,
      themeMode,
      isShowContact,
      isShowLog,
      changeModeAction,
      changeShowLogAction,
      toggleCollapsedAction,
      headerSettingCollapsed,
      changeShowContactAction,
      toggleHeaderCollapsedAction
    }
  },
  {
    persist: [
      {
        storage: localStorage,
        paths: ['themeMode', 'headerSettingCollapsed']
      },
      {
        storage: sessionStorage,
        // paths: ['isShowLog', 'isShowContact']
        paths: ['isShowContact']
      }
    ]
  }
)
