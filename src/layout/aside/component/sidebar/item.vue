<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render (h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      if (icon.startsWith('el-icon')) {
        vnodes.push(<i class={icon}/>)
      } else {
        vnodes.push(<i class={icon + ' iconfont'} style="width: 24px; height: 18px; margin-right: 5px;"/>)
      }
    }

    if (title) {
      vnodes.push(<span slot='title' style="text-align:center;">{(title)}</span>)
    }
    return vnodes
  }
}
</script>
