<template>
  <div
    class="header-search-wrapper"
    :class="{'show':show}"
  >
    <i
      class="el-icon-search search-icon"
      @click="onIconClick"
    />
    <el-input
      ref="searchInput"
      class="header-search-input"
      placeholder="Search"
      clearable
      v-model="searchWord"
      @blur="onInputClose"
    />
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch',

  data () {
    return {
      show: false,
      searchWord: ''
    }
  },

  methods: {
    onIconClick () {
      this.show = !this.show
      if (this.show) {
        this.$refs.searchInput.focus()
      }
    },

    onInputClose () {
      this.show = false
    }
  }
}
</script>

<style lang="less" scoped>
  .header-search-wrapper {
    font-size: 0 !important;

    .search-icon {
      cursor: pointer;
      font-size: 20px;
      vertical-align: 12px;
    }

    .header-search-input {
      font-size: 18px;
      transition: width 0.2s;
      width: 0;
      overflow: hidden;
      background: transparent;
      border-radius: 0;
      display: inline-block;
      vertical-align: -5px;
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
    }
    &.show {
      .header-search-input {
        width: 210px;
        margin-left: 10px;
      }
    }
  }
</style>
