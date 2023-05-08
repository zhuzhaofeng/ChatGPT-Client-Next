<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import type { RouterLink } from 'vue-router'

import { useLayoutStore } from '@/store/layout'
const { VITE_FEATURES } = import.meta.env

import ContactModel from './components/ContactModel.vue'
import type { ThemeMode } from './types/theme'
import MessageListDrawer from './views/sider/MessageListDrawer.vue'
import SettingDrawer from './views/sider/SettingDrawer.vue'

const route = useRoute()
const router = useRouter()
const { isMobileScreen } = useWindowSize()
const current = computed(() => route.name)
const popupVisible = ref(false)

const layoutStore = useLayoutStore()

const handleMenuItemClick = (name: string) => {
  try {
    router.push({ name })
  } catch (_) {
    Message.error('路由未实现~')
  }
}
const handleToRouter = (path: string) => {
  popupVisible.value = false
  router.push(path)
}

const handleChangeTheme = (v: string | number | boolean) => {
  layoutStore.changeModeAction(v as unknown as ThemeMode)
}
</script>

<template>
  <a-layout class="w-full h-full bg-[var(--color-neutral-1)]">
    <a-layout-header
      class="h-14 flex items-center bg-white dark:bg-dark pr-2"
      :class="{ 'pl-2': !$route.meta?.hideLogoText && isMobileScreen }"
    >
      <a-button
        @click="layoutStore.toggleCollapsedAction"
        v-if="!$route.meta?.hideLogoText && isMobileScreen"
      >
        <template #icon><icon-menu /></template>
      </a-button>

      <RouterLink
        to="/"
        class="header-logo"
        :class="[
          { 'is-mobile': isMobileScreen },
          $route.meta?.hideLogoText ? 'justify-start pl-4' : 'justify-center'
        ]"
      >
        <img class="w-8 h-8 mr-2" src="@/assets/logo.svg" :alt="APP_TITLE" />
        <h1 class="text-base m-0">{{ APP_TITLE }}</h1>
      </RouterLink>
      <!-- 移动端不显示 -->
      <a-menu
        v-if="!isMobileScreen"
        @menu-item-click="handleMenuItemClick"
        mode="horizontal"
        :selected-keys="[current]"
        class="header-menu"
      >
        <a-menu-item
          v-if="VITE_FEATURES.includes('CHAT')"
          key="Chat"
          class="ml-auto"
        >
          <template #icon><icon-message /></template>
          聊天
        </a-menu-item>
        <a-menu-item key="Draw" v-if="VITE_FEATURES.includes('DRAW')">
          <template #icon><icon-pen-fill /></template>
          绘图
        </a-menu-item>
        <a-menu-item key="Tools" v-if="VITE_FEATURES.includes('TOOLS')">
          <template #icon><icon-apps /></template>
          工具
        </a-menu-item>
        <a-menu-item key="Tutorial">
          <template #icon><icon-question-circle /></template>
          使用说明
        </a-menu-item>
        <a-button
          class="cursor-pointer text-primary"
          type="text"
          target="_blank"
          href="https://www.houfaka.com/links/82105BDE"
        >
          购买积分卡
        </a-button>
      </a-menu>
      <i class="flex-1"></i>
      <!-- <a-input-group
        v-if="!isMobileScreen && !route.meta.hideSetup"
        class="mr-2"
      >
        <a-button class="px-1" @click="layoutStore.toggleHeaderCollapsedAction">
          <icon-right
            :class="[
              'header-collapsed',
              { 'is-collapsed': !layoutStore.headerSettingCollapsed }
            ]"
          />
        </a-button>
        <div
          :class="[
            'flex flex-nowrap overflow-hidden transition-all',
            layoutStore.headerSettingCollapsed
              ? $route.name !== 'Draw'
                ? 'w-[28.5rem]'
                : 'w-60'
              : 'w-0'
          ]"
        >
          <ChangeChatModel v-if="$route.name !== 'Draw'" class="w-48 mr-2" />
        </div>
      </a-input-group> -->
      <a-radio-group
        :model-value="layoutStore.themeMode"
        type="button"
        class="mr-4"
        @change="handleChangeTheme"
      >
        <a-radio value="light"><icon-sun /></a-radio>
        <a-radio value="dark"><icon-moon /></a-radio>
        <!-- <a-radio value="auto"><icon-relation /></a-radio> -->
      </a-radio-group>
      <SetupCard
        v-if="!isMobileScreen && !route.meta.hideSetup"
        class="w-60 mr-2"
      />
      <a-popover
        trigger="click"
        v-model:popup-visible="popupVisible"
        content-class="mr-2"
      >
        <!-- <a-avatar
          :image-url="userAvatar"
          :size="32"
          :style="{ backgroundColor: '#14C9C9' }"
        >
        </a-avatar> -->
        <a-button>
          <icon-more />
        </a-button>
        <template #content>
          <PointsCard
            v-if="route.name !== 'Chat' || isMobileScreen"
          ></PointsCard>
          <div
            class="grid gap-3 grid-cols-2"
            :class="isMobileScreen ? 'grid-cols-2' : 'grid-cols-1'"
          >
            <template v-if="isMobileScreen">
              <a-button
                v-if="route.name !== 'Chat'"
                @click="handleToRouter('chat')"
              >
                聊天
              </a-button>
              <!-- <a-button @click="handleToRouter('/tools')">工具</a-button> -->
              <a-button
                v-if="route.name !== 'Tutorial'"
                @click="handleToRouter('/tutorial')"
              >
                使用说明
              </a-button>
              <a-button
                target="_blank"
                href="https://www.houfaka.com/links/82105BDE"
              >
                购买积分卡
              </a-button>
            </template>
            <SettingDrawer />
            <a-button
              v-if="route.name !== 'About'"
              @click="handleToRouter('/about')"
            >
              关于我们
            </a-button>
          </div>
        </template>
      </a-popover>
    </a-layout-header>
    <a-divider class="m-0" />
    <a-layout class="flex-1 overflow-hidden relative">
      <RouterView v-if="!isMobileScreen" name="sider"></RouterView>
      <a-layout class="flex-1 overflow-hidden">
        <RouterView />
      </a-layout>
    </a-layout>
  </a-layout>
  <MessageListDrawer v-model:visible="layoutStore.collapsed" />
  <ContactModel />
  <ChangelogModel />
</template>

<style lang="less" scoped>
:deep(.arco-tabs-nav-tab-list) {
  @apply w-full flex items-center;
  .arco-tabs-tab {
    @apply flex-1;
  }
}
.header-menu {
  @apply h-full overflow-hidden;
  :deep(.arco-menu-inner) {
    @apply h-full overflow-hidden;
    .arco-menu-icon {
      @apply mr-0;
    }
  }
  :deep(.arco-menu-selected-label) {
    @apply left-0 right-0;
  }
}
.header-collapsed {
  @apply transition-all;
  &.is-collapsed {
    transform: scaleX(-1);
  }
}
</style>
