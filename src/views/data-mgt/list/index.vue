<template>
  <div class="data-mgt-list-wrapper">
    <query-form
      v-if="querySchema.length > 0"
      :query-schema="querySchema"
      :query-model="queryModel"
      @queryclick="onQuery"
      :showAdd="false"
    />
    <query-tbl>
      <div class="tbl-container">
        <el-table :data="tblData" border style="width:100%" ref="tbl">
          <el-table-column
            fixed
            label="数据名称"
            align="center"
            prop="dataName"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column
            label="用户"
            align="center"
            prop="userName"
            :show-overflow-tooltip="true"
            width="250px"
          ></el-table-column>
          <el-table-column
            label="大小"
            align="center"
            prop="dataSize"
            :show-overflow-tooltip="true"
            width="200px"
          ></el-table-column>
          <el-table-column
            label="上传日期"
            align="center"
            prop="uploadTime"
            :show-overflow-tooltip="true"
            width="200px"
          ></el-table-column>
        </el-table>

        <el-pagination
          @current-change="onQuery"
          @size-change="onPageSizeChange"
          :current-page.sync="queryModel.pageIndex"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="queryModel.pageSize"
          layout="total,  prev, pager, next, sizes"
          :total="tblCnt"
        ></el-pagination>
      </div>
    </query-tbl>
  </div>
</template>

<script>
import queryMixin from '@/mixins/query'
import { dataMgtApi } from '@/service'

export default {
  name: 'DataMgtList',

  mixins: [queryMixin],

  data() {
    return {}
  },

  mounted() {
    this.$nextTick(() => {
      this.initData()
      this.onQuery()
    })
  },

  methods: {
    initData() {
      this.querySchema.push(new this.$Schema('dataName', 'input', '数据名称:'))
    },

    async onQuery() {
      const { total, records: list } = await dataMgtApi.queryDatalist(this.queryModel)
      this.tblCnt = total
      this.tblData = list
    }
  }
}
</script>

<style lang="less" scoped>
.data-mgt-list-wrapper {
  display: flex;
  flex-flow: column nowrap;
}
</style>
