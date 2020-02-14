<template>
  <div class="task-mgt-list-wrapper">
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
            label="任务名称"
            align="center"
            prop="taskName"
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
            label="发起时间"
            align="center"
            prop="startTime"
            :show-overflow-tooltip="true"
            width="200px"
          ></el-table-column>
          <el-table-column
            label="运行时间"
            align="center"
            prop="duration"
            :show-overflow-tooltip="true"
            width="200px"
          ></el-table-column>
          <el-table-column
            label="状态"
            align="center"
            prop="taskStatus"
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
import { taskMgtApi } from '@/service'

export default {
  name: 'TaskMgtList',

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
      const statusList = [{
        value: 0,
        text: '进行中'
      },
      {
        value: 1,
        text: '完成'
      }]
      this.querySchema.push(new this.$Schema('taskStatus', 'select', '状态:', '请选择', statusList))
    },

    async onQuery() {
      const { total, list } = await taskMgtApi.queryTasklist(this.queryModel)
      this.tblCnt = total
      this.tblData = list
    }
  }
}
</script>

<style lang="less" scoped>
.task-mgt-list-wrapper {
  display: flex;
  flex-flow: column nowrap;
}
</style>
