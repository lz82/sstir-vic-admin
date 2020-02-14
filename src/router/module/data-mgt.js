/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout/aside'

const dataMgtList = () => import(/* webpackChunkName: "data-mgt-list" */ '@/views/data-mgt/list')

const dataMgtRouter = {
  path: '/data-mgt',
  component: Layout,
  name: 'dataMgtLayout',
  redirect: 'noredirect',
  alwaysShow: true,
  meta: {
    title: '数据管理',
    icon: 'vic-icon-shuju'
  },
  children: [
    {
      path: 'list',
      component: dataMgtList,
      name: 'dataMgtList',
      meta: { title: '数据列表', noCache: true }
    }
  ]
}

export default dataMgtRouter
