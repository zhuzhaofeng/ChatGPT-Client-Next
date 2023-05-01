<script setup lang="ts"></script>

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
        <a-breadcrumb-item>关于我们</a-breadcrumb-item>
      </a-breadcrumb>
      <div
        class="text-base leading-8 text-black dark:text-light-900 text-opacity-75"
      >
        非常感谢您选择使用{{ APP_TITLE.trim().toLocaleUpperCase() }}！ ！
        <br />
        <br />
        作为一家专注于AI技术应用的公司，我们不断研究最新的AI技术，结合实践经验，总结出最优秀的AI使用技巧和方法，为用户提供全面的AI应用服务解决方案。我们的使命是通过AI技术，提高工作效率，提高生活质量。
        <br />
        <br />
        AI2023拥有多个专业部门，为您提供全面的服务:
        <br />
        1.
        AI工具使用部门可以为您提供技术支持和使用建议，帮助您更好地使用AI技术解决问题。<br />
        2.
        AI实践应用知识库部门将与您共同探讨并总结出最佳实践，分享经验和知识。<br />
        3.
        AI应用大学堂部门将为您提供全面的课程和培训，帮助您更好地理解和掌握AI技术。<br />
        4.
        AI模型训练部门将提供强大的计算和数据处理能力，帮助您训练和优化AI模型。<br />
        我们期待与您携手合作，共同推动AI技术的发展和应用，为提高工作效率和生活质量做出贡献。感谢您的信任和支持！
      </div>

      <div class="flex flex-col items-center gap-y-2 py-2">
        <img
          class="max-w-60 w-3/4 border-solid border border-gray-200 p-1"
          alt="WeChat"
          :src="E_WECHAT_URL"
        />
        <!-- <div
            v-qr="'微信群'"
            class="w-28 h-28"
            :key="layoutStore.themeMode"
          ></div> -->
        <span class="">微信群</span>
      </div>
    </div>
  </a-scrollbar>
</template>

<style scoped lang="less">
.setting-card {
  @apply bg-white rounded-md py-4 flex flex-col gap-y-4 px-6;
}
</style>
