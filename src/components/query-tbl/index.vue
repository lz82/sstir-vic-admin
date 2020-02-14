<template>
  <el-card class="tbl-wrapper">
    <div slot="header" class="header">
      <span style="font-weight: bolder;"><i style="margin-right: 5px;" class="el-icon-s-grid"></i>查询结果</span>
      <!-- <template><span style="float: right; padding: 0px 10px 0 0; display: flex; align-items: center;"></span></template> -->
      <div class="btn-wrapper"><slot name="btn"></slot></div>
    </div>
    <div>
      <slot name="default"></slot>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'QueryTbl'
}
</script>

<style lang="less" scoped>
.tbl-wrapper {
  margin: 10px;
  .header {
    display: flex;
    flex-flow: row nowrap;
    padding: 0 10px 0 0;
    justify-content: space-between;
    .btn-wrapper {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
  }
}
</style>
