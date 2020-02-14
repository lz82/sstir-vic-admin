<template>
  <section class="appmain-container">
    <!-- https://cn.vuejs.org/v2/api/#transition -->
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppMain',

  mounted () {
  },

  computed: {
    ...mapGetters(['cachedViews']),

    key () {
      // return this.$route.fullPath
      // 相同组件复用时，需要指定key
      // 但是一般情况只有详情页才会复用，详情页的noCache一般为true
      // 如果所有路由都增加一个时间戳key，会导致keep-alive缓存失效
      if (this.$route.name !== undefined && this.$route.meta.noCache) {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      } else {
        return this.$route.name
      }
    }
  }
}
</script>

<style lang="less" scoped>
.appmain-container {
  font-size: inherit;
}
</style>
