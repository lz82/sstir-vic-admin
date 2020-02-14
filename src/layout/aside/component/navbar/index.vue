<template>
  <div class="navbar">
    <hamburger
      class="hamburger-container"
      :toggle-click="toggleSideBar"
      :is-active="sidebarOpened" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <!-- <search id="header-search" class="right-menu-item" /> -->
        <el-tooltip content="全屏" effect="dark" placement="bottom">
          <screenfull class="screenfull right-menu-item"/>
        </el-tooltip>
      </template>
      <!-- <lang-select class="international right-menu-item"/> -->
      <!-- </el-tooltip> -->
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar" class="user-avatar">
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            {{userInfo.realName}},您好
          </el-dropdown-item>
          <router-link to="/home/userinfo">
            <el-dropdown-item divided>
              个人中心
            </el-dropdown-item>
          </router-link>
          <router-link to="/home/changepwd">
            <el-dropdown-item>
              修改密码
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import Breadcrumb from '@/components/breadcrumb'
import Hamburger from '@/components/hamburger'
import Screenfull from '@/components/screenfull'
// import Search from '@/components/header-search'

import avatar from './img/user-avatar.png'

export default {
  name: 'Navbar',

  components: {
    Breadcrumb,
    Hamburger,
    Screenfull
    // Search
  },

  data () {
    return {
      avatar: avatar
    }
  },

  computed: {
    ...mapGetters(['device', 'sidebar', 'userInfo']),

    sidebarOpened () {
      return !!this.sidebar.opened
    }
  },

  methods: {
    ...mapMutations({
      toggleSideBar: 'toggle_sidebar'
    }),

    logout () {
      // 清除cookie和vue中的token
      // 刷新页面触发permission中的逻辑
      // 自动在后面拼上redirect url
      this.$store.dispatch('logOut')
        .then(() => {
          location.reload() // in order to re-instaniate vue-router
        })
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }

    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 16px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
