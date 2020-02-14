<template>
  <el-form-item :label="formItem.label" prop="formItem.name">
    <el-date-picker
    v-model="inputData"
    :type="componentType"
    :picker-options="pickerOptions"
    range-separator="~"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    align="right"
    :value-format="dateFormat"
    style="width:220px;">
  </el-date-picker>
</el-form-item>
</template>

<script>
export default {
  name: 'CusDate',

  data () {
    return {
      inputData: '',
      pickerOptions: this.$DatepickerOptionAll
    }
  },

  mounted () {
    this.$nextTick(() => {
    })
  },

  props: {
    formItem: {},
    data: {}
  },

  watch: {
    inputData (val) {
      this.$emit('update:data', val)
    },
    data (val) {
      if (val === null) {
        this.inputData = null
      }
    }
  },

  computed: {
    dateFormat () {
      if (this.formItem.type === 'daterange') {
        return 'yyyy-MM-dd'
      } else {
        return 'yyyy-MM-dd HH:mm:ss'
      }
    },
    componentType () {
      return this.formItem.type
    }
  }
}
</script>

<style></style>
