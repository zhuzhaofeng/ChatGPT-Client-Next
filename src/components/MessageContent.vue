<script setup lang="ts">
import mdKatex from '@traptitech/markdown-it-katex'
import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
import mila from 'markdown-it-link-attributes'
import { computed, ref } from 'vue'
// import { useBasicLayout } from '@/hooks/useBasicLayout'
// import { t } from '@/locales'

interface Props {
  inversion?: boolean
  error?: boolean
  text?: string
  loading?: boolean
  asRawText?: boolean
}

const props = defineProps<Props>()

const textRef = ref<HTMLElement>()
const mdi = new MarkdownIt({
  linkify: true,
  highlight(code, language) {
    const validLang = !!(language && hljs.getLanguage(language))
    if (validLang) {
      const lang = language ?? ''
      return highlightBlock(
        hljs.highlight(code, { language: lang }).value,
        lang
      )
    }
    return highlightBlock(hljs.highlightAuto(code).value, '')
  }
})

mdi.use(mila, { attrs: { target: '_blank', rel: 'noopener' } })
mdi.use(mdKatex, {
  blockClass: 'katexmath-block rounded-md p-[10px]',
  errorColor: ' #F53F3F'
})

const wrapClass = computed(() => {
  return [
    'message-content',
    'min-w-[20px]',
    'rounded-md',
    // isMobile.value ? 'p-2' : 'px-3 py-2',
    // text-[#1e1e20]
    props.inversion ? 'text-[#f1f1f1]' : 'bg-[#e5e6eb]',
    props.inversion ? 'text-[]' : 'dark:bg-[#1e1e20]',
    props.inversion ? 'message-request' : 'message-reply',
    { 'text-red-500': props.error }
  ]
})
const removeTrailingNewLines = (text: string) => {
  try {
    return text?.replace(/\n+$/g, '')
  } catch (error) {
    console.log(text)
    return text
  }
}

const text = computed(() => {
  const value = removeTrailingNewLines(props.text ?? '')
  if (!props.asRawText && !props.inversion) return mdi.render(value)
  return value
})

function highlightBlock(str: string, lang?: string) {
  return `<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">${lang}</span><span class="code-block-header__copy">复制代码</span></div><code class="hljs code-block-body ${lang}">${str}</code></pre>`
}
onUpdated(() => {
  nextTick(() => {
    if (textRef.value) {
      hljs.highlightBlock(textRef.value)
    }
  })
})
</script>
<template>
  <div :class="wrapClass">
    <template v-if="loading">
      <span class="dark:text-white w-[4px] h-[20px] block animate-blink" />
    </template>
    <template v-else>
      <div ref="textRef" class="leading-relaxed break-words">
        <div v-if="!inversion">
          <div v-if="!asRawText" class="markdown-body" v-html="text"></div>
          <div v-else class="whitespace-pre-wrap" v-text="text" />
        </div>
        <div v-else class="whitespace-pre-wrap" v-text="text" />
      </div>
    </template>
  </div>
</template>

<style scoped>
.message-content {
  @apply max-w-max;
}
</style>
