<template>
  <div class="login-wrapper">
    <div class="header">
      <span class="logo-txt">未知病毒检测平台-后台管理中心</span>
    </div>
    <div class="login-con">
      <el-card class="login-card">
        <div class="form-title">
          <span>欢迎登录</span>
        </div>
        <div class="form-con">
          <el-form
            ref="login"
            class="form"
            :model="loginModel"
            :rules="rules"
          >
            <el-form-item
              prop="userName"
            >
              <el-input
                prefix-icon="el-icon-user"
                placeholder="请输入用户名"
                v-model="loginModel.userName"
                size="medium"
                clearable
              />
            </el-form-item>
            <el-form-item
              prop="pwd"
            >
              <el-input
                prefix-icon="el-icon-lock"
                placeholder="请输入密码"
                v-model="loginModel.pwd"
                size="medium"
                show-password
                clearable
              />
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="loginModel.remember">记住密码</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onLogin" style="width: 100%;" size="medium">登 录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="login-bottom"></div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',

  data() {
    return {
      redirect: '',
      loginModel: {
        userName: '',
        pwd: '',
        remember: true
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },

  mounted () {
    this.redirect = this.$route.query.redirect
  },

  methods: {
    ...mapActions({
      login: 'logIn'
    }),

    // 提交登录
    async onLogin () {
      try {
        await this.login({ ...this.loginModel })
        this.$router.push({ path: this.redirect || '/home/index' })
      } catch (err) {
        this.$message.error(err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';
.login-wrapper {
  width: 100%;
  height: 100%;
  .header {
    height: 12%;
    display: flex;
    align-items: center;
    padding: 0 60px;
    .logo-txt {
      font-size: 40px;
      font-family: Arial;
      font-weight: bold;
      color: rgba(44, 76, 135, 1);
      line-height: 46px;
    }
  }
  .login-con {
    width: 100%;
    height: 76%;
    position: relative;
    background-image: url('./img/bg.png');
    background-size: cover;
    background-position: center;
    .login-card {
      width: 400px;
      position: absolute;
      right: 100px;
      top: 50%;
      transform: translateY(-60%);
      padding: 20px 10px;
      .form-title {
        margin-bottom: 26px;
        text-align: center;
        span {
          display: inline-block;
          border-bottom: 4px solid @primary-color;
          font-size: 30px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #464646;
          line-height: 42px;
        }
      }
      .form-con {
        padding: 10px 0 0;
        .register {
          color: @primary-color;
          border-bottom: 1px solid @primary-color;
        }
      }
    }
  }
  .login-bottom {
    height: 12%;
  }
}
</style>
