/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout/aside'

const empMgt = () => import(/* webpackChunkName: "emp-mgt" */ '@/views/setting/emp')

const settingRouter = {
  path: '/setting',
  component: Layout,
  name: 'settingLayout',
  redirect: 'noredirect',
  alwaysShow: true,
  meta: {
    title: '后台',
    icon: 'vic-icon-setting'
  },
  children: [
    {
      path: 'emp',
      component: empMgt,
      name: 'settingEmpMgt',
      meta: { title: '账号管理', noCache: true }
    }
  ]
}

export default settingRouter
