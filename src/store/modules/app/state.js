import Cookies from 'js-cookie'

export default {
  sidebar: {
    opened: Cookies.get('sidebarStatus'),
    withoutAnimation: false
  },
  language: Cookies.get('language') || 'zh',
  device: 'desktop'
}
