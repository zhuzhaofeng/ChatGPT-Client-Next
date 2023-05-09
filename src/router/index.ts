import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

//
const { VITE_FEATURES } = import.meta.env
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('../views/HomeView.vue')
    },
    meta: {
      hideSetup: true,
      hideLogoText: true
    }
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: () => import('@/views/main/TutorialView.vue')
  },
  // {
  //   path: '/settings',
  //   name: 'Settings',
  //   component: () => import('@/views/main/SettingsView.vue')
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/main/AboutView.vue')
  }
]
if (VITE_FEATURES.includes('CHAT')) {
  routes.push({
    path: '/chat',
    name: 'Chat',
    components: {
      sider: () => import('../views/sider/MessageList.vue'),
      default: () => import('../views/main/ChatView.vue')
    }
  })
}

if (VITE_FEATURES.includes('TOOLS')) {
  routes.push({
    path: '/tools',
    name: 'Tools',
    component: () => import('@/views/main/ToolsView.vue')
  })
}

if (VITE_FEATURES.includes('DALL_E')) {
  routes.push({
    path: '/dall-e',
    name: 'DallE',
    component: () => import('@/views/main/DallE.vue')
  })
}
if (VITE_FEATURES.includes('MIDJOURNEY')) {
  routes.push({
    path: '/mj',
    name: 'Midjourney',
    component: () => import('@/views/main/MidjourneyView.vue')
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
