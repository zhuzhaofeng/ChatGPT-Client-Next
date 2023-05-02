<script setup lang="ts">
import mdKatex from '@traptitech/markdown-it-katex'
import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
import mila from 'markdown-it-link-attributes'
const mdi = new MarkdownIt({
  linkify: true,
  highlight(code, language) {
    const validLang = !!(language && hljs.getLanguage(language))
    if (validLang) {
      const lang = language ?? ''
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  }
})

mdi.use(mila, { attrs: { target: '_blank', rel: 'noopener' } })
mdi.use(mdKatex, {
  blockClass: 'katexmath-block rounded-md p-[10px]',
  errorColor: ' #cc0000'
})
const content = ref('')
const loadTutorial = async () => {
  const res = await fetch('/tutorial.md').then(res => res.text())
  content.value = res
}

const text = computed(() => mdi.render(content.value))

onMounted(() => {
  loadTutorial()
})
</script>
<template>
  <a-scrollbar
    outer-style="flex: 1; overflow: hidden;"
    class="overflow-y-auto h-full p-4 flex flex-col gap-y-2"
  >
    <div class="max-w-4xl w-full mx-auto">
      <a-breadcrumb class="my-6">
        <a-breadcrumb-item>
          <a-link @click="$router.back">
            <icon-arrow-left />
            返回
          </a-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>使用说明</a-breadcrumb-item>
      </a-breadcrumb>
      <div
        class="markdown-body p-6 rounded border border-solid border-gray-100 dark:border-dark-900"
        v-html="text"
      ></div>
    </div>
  </a-scrollbar>
</template>
<style scoped></style>
