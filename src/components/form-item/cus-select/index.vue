<template>
  <el-form-item :label="formItem.label" prop="formItem.name" :label-width="this.formItem.width">
    <el-select v-model="inputData" :placeholder="formItem.placeholder" clearable filterable  :multiple="formItem.isMulti" style="width:220px;">
      <el-option v-for="item in formItem.options" :key="item.value" :label="item.text || item.name" :value="item.value">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'CusSelect',

  data () {
    return {
      inputData: this.getDefaultVal(this.formItem)
    }
  },

  props: {
    formItem: {},
    data: {
      type: [String, Array, Number],
      default: ''
    }
  },

  methods: {
    getDefaultVal (item) {
      if (item.defaultVal === undefined || item.defaultVal === '') {
        return []
      } else {
        return item.defaultVal
      }
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
