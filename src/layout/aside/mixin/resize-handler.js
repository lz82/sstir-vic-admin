import store from '@/store'

const {
  body
} = document
const WIDTH = 1024
const RATIO = 3

export default {
  watch: {
    $route (route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.commit('set_sidebar', {
          withoutAnimation: false,
          opened: false
        })
      }
    }
  },
  beforeMount () {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted () {
    const isMobile = this.isMobile()
    if (isMobile) {
      store.commit('set_device', 'mobile')
      store.commit('set_sidebar', {
        withoutAnimation: true,
        opened: false
      })
    }
  },
  methods: {
    isMobile () {
      const rect = body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH
    },
    resizeHandler () {
      if (!document.hidden) {
        const isMobile = this.isMobile()
        store.commit('set_device', isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          store.commit('set_sidebar', {
            withoutAnimation: true,
            opened: false
          })
        }
      }
    }
  }
}
