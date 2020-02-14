/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout/aside'

const userMgtList = () => import(/* webpackChunkName: "user-mgt-list" */ '@/views/user-mgt/list')

const dataMgtRouter = {
  path: '/user-mgt',
  component: Layout,
  name: 'userMgtLayout',
  redirect: 'noredirect',
  alwaysShow: true,
  meta: {
    title: '用户管理',
    icon: 'vic-icon-user'
  },
  children: [
    {
      path: 'list',
      component: userMgtList,
      name: 'userMgtList',
      meta: { title: '用户列表', noCache: true }
    }
  ]
}

export default dataMgtRouter
