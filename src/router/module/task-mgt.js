/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout/aside'

const taskMgtList = () => import(/* webpackChunkName: "task-mgt-list" */ '@/views/task-mgt/list')

const taskMgtRouter = {
  path: '/task-mgt',
  component: Layout,
  name: 'taskMgtLayout',
  redirect: 'noredirect',
  alwaysShow: true,
  meta: {
    title: '任务管理',
    icon: 'vic-icon-task'
  },
  children: [
    {
      path: 'list',
      component: taskMgtList,
      name: 'taskMgtList',
      meta: { title: '任务列表', noCache: true }
    }
  ]
}

export default taskMgtRouter
