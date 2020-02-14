<template>
  <div class="app-wrapper" :class="classObj">
    <!-- 当处于mobile模式时，点击侧边栏的遮罩 -->
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar />
      <tags-view />
      <app-main />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import Sidebar from './component/sidebar'
import Navbar from './component/navbar'
import TagsView from './component/tags-view'
import AppMain from './component/app-main'

import ResizeMixin from './mixin/resize-handler'

export default {
  name: 'Layout',

  components: {
    Sidebar,
    Navbar,
    TagsView,
    AppMain
  },

  mixins: [ResizeMixin],

  data () {
    return {}
  },

  methods: {
    ...mapMutations({
      closeSidebar: 'set_sidebar'
    }),
    handleClickOutside () {
      this.closeSidebar({
        opened: false,
        withoutAnimation: false
      })
    }
  },

  computed: {
    ...mapGetters(['sidebar', 'device']),
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  }
}
</script>

<style lang="less">
@import "~@/styles/mixin.less";
.app-wrapper {
  .clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
