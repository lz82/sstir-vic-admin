import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/aside'

import dataMgt from './module/data-mgt'
import taskMgt from './module/task-mgt'
import userMgt from './module/user-mgt'
import setting from './module/setting'

const Login = () => import(/* webpackChunkName: "login" */ '@/views/login')
const Home = () => import(/* webpackChunkName: "homepage" */ '@/views/home')

const NoAuthPage = () => import(/* webpackChunkName: "no-auth-page" */ '@/views/error-page/401')
const NotFoundPage = () => import(/* webpackChunkName: "not-found-page" */ '@/views/error-page/404')

const Redirect = () => import(/* webpackChunkName: "redirect" */ '../views/redirect')
const UserInfo = () => import(/* webpackChunkName: "userinfo" */ '@/views/user-info')
const ChangePwd = () => import(/* webpackChunkName: "change-pwd" */ '@/views/change-pwd')

Vue.use(Router)

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/

export const constantRouterMap = [
  {
    path: '/login',
    hidden: true,
    component: Login
  },
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: Redirect
      }
    ]
  },
  {
    path: '/home',
    hidden: true,
    component: Layout,
    redirect: '/home/index',
    meta: {
      title: 'homepage',
      icon: 's-home'
    },
    children: [
      {
        path: 'index',
        name: 'homepage',
        component: Home,
        meta: {
          title: '首页',
          noCache: true
        }
      },
      {
        path: 'userinfo',
        name: 'userInfo',
        component: UserInfo,
        meta: {
          title: '个人中心',
          noCache: true
        }
      },
      {
        path: 'changepwd',
        name: 'changePwd',
        component: ChangePwd,
        meta: {
          title: '修改密码',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/401',
    component: () => NoAuthPage,
    hidden: true
  },
  {
    path: '/404',
    component: NotFoundPage,
    hidden: true
  }
]

// 解决vue-router 新版本bug
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  dataMgt,
  taskMgt,
  userMgt,
  setting,
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default router
