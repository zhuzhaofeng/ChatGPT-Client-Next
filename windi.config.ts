import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  important: true,
  preflight: false,
  shortcuts: {
    hstack: 'flex items-center',
    vstack: 'flex flex-col',
    icon: 'w-6 h-6 fill-current',
    app: 'text-red',
    'app-border': 'border-gray-200 dark:border-dark-300'
  },
  theme: {
    extend: {
      colors: {
        dark: '#232324',
        'dark-900': '#17171a',
        'arcoblue-1': '#10A37F',
        primary: '#10A37F',
        link: '#10A37F',
        success: '#00b324',
        warning: '#ff6805',
        danger: '#f53f3f',
        error: '#f53f3f',
        info: '#868d9d'
      }
    }
  },
  plugins: [formsPlugin]
})
