<template>
  <el-card class="card-pannel-wrapper">
    <div slot="header" class="clearfix">
      <span style="font-size: 16px; color: #409EFF;">{{title}}</span>
      <i v-if="showContent" class="btn el-icon-arrow-up" @click="toggle(false)" />
      <i v-else class="btn el-icon-arrow-down" @click="toggle(true)" />
    </div>
    <div ref="content" v-show="showContent" class="content">
      <slot></slot>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'CardPannel',

  props: {
    title: {
      type: String
    }
  },

  data () {
    return {
      showContent: true
    }
  },

  methods: {
    toggle (val) {
      this.showContent = val
    }
  }
}
</script>

<style lang="less" scoped>
  .card-pannel-wrapper {
    .btn {
      float: right;
      padding: 4px;
      cursor: pointer;
      font-size: 16px;
    }

    .content {
      padding: 0 10px;
    }
  }
</style>
