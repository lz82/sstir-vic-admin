import { mapGetters, mapActions } from 'vuex'

const queryMixin = {
  data() {
    return {
      querySchema: [],
      queryModel: {
        pageIndex: 1,
        pageSize: 20
      },
      tblData: [],
      tblCnt: 0,
      maxHeight: null,
      localQueryForm: {
        isShow: false
      }
    }
  },

  methods: {
    ...mapActions(['delCachedView']),

    onQuery() {},

    onQueryClick() {
      this.queryModel.pageIndex = 1
      this.onQuery(1)
    },

    onPageSizeChange(val) {
      this.queryModel.pageSize = val
      this.queryModel.pageIndex = 1
      this.onQuery()
    },

    _initHeight() {
      setTimeout(() => {
        this.localQueryForm = this.$refs.queryForm
        this._calcTblHeight()
      }, 300)
    },

    _calcTblHeight() {
      const total = document.documentElement.clientHeight
      const header = this.localQueryForm.$el.offsetTop + this.localQueryForm.$el.clientHeight
      this.maxHeight = total - header - 200 < 200 ? 200 : total - header - 200
    }
  },

  computed: {
    ...mapGetters(['language']),

    showQuery() {
      return this.localQueryForm.isShow
    }
  },

  watch: {
    showQuery() {
      this.$nextTick(() => {
        this._calcTblHeight()
      })
    },

    language(val) {
      this.delCachedView(this.$route).then(() => {
        const { fullPath } = this.$route
        this.$nextTick(() => {
          this.$router.replace({
            path: '/redirect' + fullPath
          })
        })
      })
    }
  }
}

export default queryMixin
