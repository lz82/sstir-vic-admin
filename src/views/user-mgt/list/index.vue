<template>
  <div class="user-mgt-list-wrapper">
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
            label="用户名"
            align="center"
            prop="userName"
            :show-overflow-tooltip="true"
            width="150px"
          ></el-table-column>
          <el-table-column
            label="邮箱"
            align="center"
            prop="email"
            :show-overflow-tooltip="true"
            width="250px"
          ></el-table-column>
          <el-table-column
            label="机构"
            align="center"
            prop="orgName"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column
            label="手机号"
            align="center"
            prop="mobile"
            :show-overflow-tooltip="true"
            width="200px"
          ></el-table-column>
          <el-table-column
            label="注册时间"
            align="center"
            prop="regTime"
            :show-overflow-tooltip="true"
            width="150px"
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
import { userMgtApi } from '@/service'

export default {
  name: 'UserMgtList',

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
      this.querySchema.push(new this.$Schema('userName', 'input', '用户名:'))
      this.querySchema.push(new this.$Schema('orgName', 'input', '机构名称:'))
      this.querySchema.push(new this.$Schema('regTime', 'daterange', '注册时间:'))
    },

    async onQuery() {
      try {
        const { total, records: list } = await userMgtApi.queryUserlist(this.queryModel)
        this.tblCnt = total
        this.tblData = list
      } catch (err) {
        this.$message.error(err)
        this.tblCnt = 0
        this.tblData = []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.user-mgt-list-wrapper {
  display: flex;
  flex-flow: column nowrap;
}
</style>
