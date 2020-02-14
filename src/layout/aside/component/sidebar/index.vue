<template>
  <!-- element-ui 隐藏控件 -->
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="logo-wrapper">
      <router-link to="/home/index">
        <img src="logo.png" alt="" :style="{width: isCollapse ? '36px' : '72px'}">
      </router-link>
    </div>
    <el-menu
      :show-timeout="100"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="rgb(48, 53, 61)"
      text-color="rgba(255, 255, 255, 0.65)"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in permissionRouters" :key="route.name" :item="route" :base-path="route.path"/>
  </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './sidebar-item'

import logo from './img/logo.png'

export default {
  name: 'Sidebar',

  data () {
    return {
      logo: logo
    }
  },

  components: {
    SidebarItem
  },

  computed: {
    ...mapGetters(['sidebar', 'permissionRouters']),

    isCollapse () {
      return !this.sidebar.opened
    }
  }
}
</script>

<style lang="less" scoped>
  .logo-wrapper {
    padding: 10px 0;
    text-align: center;
    background: rgb(48, 53, 61);
  }
</style>
