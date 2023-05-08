<script setup lang="ts">
import { useConfigStore } from '@/store/config'
import { useLayoutStore } from '@/store/layout'
import { SubmitKey } from '@/types/keys'
import type { ThemeMode } from '@/types/theme'

import { version } from '../../../package.json'

const configStore = useConfigStore()
const themeTitleMap: Record<ThemeMode, string> = {
  light: '浅色模式',
  dark: '深色模式'
}
const layoutStore = useLayoutStore()
const { isMobileScreen } = useWindowSize()
const handleChangeTheme = (v: string | number | boolean) => {
  layoutStore.changeModeAction(v as unknown as ThemeMode)
}
</script>

<template>
  <a-scrollbar
    outer-style="flex: 1; overflow: hidden;"
    :outer-class="['settings-wrapper', { 'is-mobile': isMobileScreen }]"
    class="overflow-y-auto h-full p-4 flex flex-col gap-y-2"
  >
    <div class="max-w-4xl w-full mx-auto">
      <a-form
        ref="formRef"
        :label-col-props="{ span: 12 }"
        label-align="left"
        :model="{}"
        class="w-full mt-0 flex flex-col gap-y-3"
      >
        <div class="setting-card dark:bg-dark">
          <a-form-item
            label-col-flex="1"
            :label-attrs="{ align: 'left' }"
            class="mb-0 font-medium pl-4 dark:text-light-900 nowrap"
            field="theme"
            label="Version"
          >
            <span class="text-primary">v{{ version }}</span>
          </a-form-item>
        </div>

        <div class="setting-card dark:bg-dark">
          <a-form-item class="mb-0" field="card" label="积分卡">
            <SetupCard class="w-full" />
          </a-form-item>
        </div>

        <div class="setting-card dark:bg-dark">
          <!-- <a-form-item
            class="mb-0"
            field="modelConfig.model"
            label="模型(Model)"
          >
            <ChangeChatModel class="w-full" />
          </a-form-item> -->
          <a-form-item
            class="mb-0"
            field="modelConfig.temperature"
            :label="
              isMobileScreen
                ? '随机性 (temperature)'
                : `随机性 (temperature): ${configStore.temperature}`
            "
          >
            <a-input-number
              v-if="isMobileScreen"
              :max="2"
              :step="0.1"
              :min="0.1"
              :precision="0.1"
              :model-value="configStore.temperature"
              @change="configStore.changeTemperatureAction"
              mode="button"
            />
            <a-slider
              v-else
              :model-value="configStore.temperature"
              @change="configStore.changeTemperatureAction"
              :step="0.1"
              :min="0.1"
              :max="2"
            />
          </a-form-item>
        </div>
        <div class="setting-card dark:bg-dark">
          <a-form-item class="mb-0" field="theme" label="主题">
            <div class="flex flex-wrap gap-y-2 items-center">
              <a-radio-group
                :model-value="layoutStore.themeMode"
                type="button"
                @change="handleChangeTheme"
              >
                <a-radio value="light"><icon-sun /></a-radio>
                <a-radio value="dark"><icon-moon /></a-radio>
                <!-- <a-radio value="auto"><icon-relation /></a-radio> -->
              </a-radio-group>
              <span class="font-medium pl-4 text-primary">
                {{ themeTitleMap[layoutStore.themeMode] }}
              </span>
            </div>
          </a-form-item>
          <a-form-item
            v-if="false"
            class="mb-0"
            field="submitKey"
            label="发送键"
          >
            <a-select
              v-if="isMobileScreen"
              :model-value="configStore.submitKey"
              @change="(v: any) => configStore.changeSubmitKeyAction(v)"
            >
              <a-option
                v-for="item in Object.values(SubmitKey)"
                :key="item"
                :value="item"
              >
                {{ item }}
              </a-option>
            </a-select>
            <a-radio-group
              v-else
              type="button"
              :model-value="configStore.submitKey"
              @change="(v: any) => configStore.changeSubmitKeyAction(v)"
            >
              <a-radio
                v-for="item in Object.values(SubmitKey)"
                :key="item"
                :value="item"
              >
                {{ item }}
              </a-radio>
            </a-radio-group>
          </a-form-item>
        </div>
      </a-form>
    </div>
  </a-scrollbar>
</template>

<style lang="less">
.settings-wrapper {
  .setting-card {
    background-color: rgba(247, 248, 250, 0.7);
    @apply rounded-md py-4 flex flex-col gap-y-4 px-6 dark:shadow-md;
  }
  &.is-mobile {
    .arco-form-item.arco-form-item-layout-horizontal {
      flex-direction: column !important;
      &.nowrap {
        flex-direction: row !important;
      }
      .arco-form-item-label-col {
        @apply w-max justify-start whitespace-nowrap;
      }
    }
  }
}
</style>
