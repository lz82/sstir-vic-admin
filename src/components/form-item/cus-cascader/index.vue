<template>
  <el-form-item :label="formItem.label" prop="formItem.name">
    <el-cascader :options="formItem.options" :change-on-select="formItem.changeOnSelect" v-model="inputData" clearable filterable style="width:220px;"></el-cascader>
  </el-form-item>
</template>

<script>
export default {
  name: 'CusSelect',

  data () {
    return {
      inputData: []
    }
  },

  props: {
    formItem: {},
    data: {
      type: [String, Array],
      default: ''
    }
  },

  watch: {
    inputData (val) {
      this.$emit('update:data', val)
    },
    data (val) {
      if (val === null) {
        if (this.inputData instanceof Array) {
          this.inputData = []
        } else {
          this.inputData = ''
        }
      }
    }
  }
}
</script>

<style></style>
