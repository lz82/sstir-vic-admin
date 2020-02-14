<template>
  <div class="container">
    <el-card ref="queryForm">
      <el-row slot="header" type="flex" justify="space-between">
        <span style="font-weight: bolder;"><i style="margin-right: 5px;" class="el-icon-search"></i>{{ title }}</span>
        <div class="btnContainer">
          <div v-show="isShow">
            <el-button type="warning" @click="resetForm">重置</el-button>
            <el-button type="primary" @click="queryForm">查询</el-button>
            <el-button v-show="showAdd" type="primary" @click="addForm">新增</el-button>
            <div style="display: inline-block; margin-left: 10px;"><slot name="button"></slot></div>
          </div>
          <i :class="opIcon" style="float: right; padding: 0 10px 0 20px; cursor:pointer" @click="onIconClick"></i>
        </div>
      </el-row>
      <transition name="fade">
        <div class="query-form" v-show="queryType">
          <el-form :inline="true" ref="queryForm"  label-width="120px" label-position="left">
            <template><slot name="query"></slot></template>
            <el-row>
              <el-col v-for="(com,index) in components" :key="index" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                <component :is="com.componentType" :formItem="com.formItem" :data.sync="queryModel[com.formItem.name]">
                </component>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </transition>
    </el-card>
  </div>
</template>

<script>
import CusInput from '@/components/form-item/cus-input'
import CusSelect from '@/components/form-item/cus-select'
import CusDate from '@/components/form-item/cus-date'
import CusSingleDate from '@/components/form-item/cus-single-date'
import CusCascader from '@/components/form-item/cus-cascader'

export default {
  name: 'QueryForm',

  components: {
    CusInput,
    CusSelect,
    CusDate,
    CusSingleDate,
    CusCascader
  },

  data () {
    return {
      components: [],
      queryType: true,
      isShow: true
    }
  },

  props: {
    title: {
      type: String,
      default: '查询条件'
    },
    querySchema: {},
    queryModel: {},
    model: {},
    showAdd: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    _initComponent () {
      this.querySchema.forEach(schema => {
        // input
        if (schema.type && schema.type === 'input') {
          this.components.push({
            componentType: 'CusInput',
            formItem: schema
          })
        }

        // select
        if (schema.type && schema.type === 'select') {
          this.components.push({
            componentType: 'CusSelect',
            formItem: schema
          })
        }

        // cascader
        if (schema.type && schema.type === 'cascader') {
          this.components.push({
            componentType: 'CusCascader',
            formItem: schema
          })
        }

        // datepicker
        if (
          schema.type &&
          (schema.type === 'daterange' || schema.type === 'datetimerange')
        ) {
          this.components.push({
            componentType: 'CusDate',
            formItem: schema
          })
        }
        // single date
        if (schema.type && schema.type === 'singledate') {
          this.components.push({
            componentType: 'CusSingleDate',
            formItem: schema
          })
        }
      })
    },

    resetForm () {
      Object.keys(this.queryModel).forEach(key => {
        // 特殊处理
        // pageindex和pagesize不能设为null
        if (key === 'pageIndex') {
          this.queryModel[key] = 1
        } else if (key === 'pageSize') {
          this.queryModel[key] = 20
        } else {
          if (key === 'category') {
            console.log(this.queryModel[key])
          }
          this.queryModel[key] = null
        }
      })
    },

    queryForm () {
      this.$emit('queryclick')
    },

    hideQuery () {
      // 当按下查询时，收起查询框
      const dom = this.$refs.queryForm.$el.getElementsByClassName(
        'el-card__body'
      )[0]
      this.queryType = false
      dom.style.display = 'none'
      this.isShow = false
    },

    addForm () {
      this.$emit('addclick')
    },

    onIconClick () {
      this.queryType = !this.queryType
      const dom = this.$refs.queryForm.$el.getElementsByClassName('el-card__body')[0]
      if (!this.queryType) {
        dom.style.display = 'none'
        this.isShow = false
      } else {
        dom.style.display = ''
        this.isShow = true
      }
    }
  },

  mounted () {
    this.$nextTick(() => {
      this._initComponent()
    })
  },

  computed: {
    opIcon () {
      if (this.queryType) {
        return 'el-icon-arrow-up'
      } else {
        return 'el-icon-arrow-down'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  margin: 10px;
  /deep/ .el-card__header {
    background-color: #f3f3f3;
    height: 50px;
    font-size: 14px;
    line-height: 50px;
    padding: 0 0 0 10px;
  }
  // /deep/ .el-form-item__label {
  //   width: auto !important;
  // }
  .btnContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
}
</style>
