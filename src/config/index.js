// 根据当前mode获取Base Url 类型
const env = process.env.VUE_APP_BASE_URL_TYPE

// 根据VUE_APP_BASE_URL_TYPE获取BASE_URL
const getBaseUrl = () => {
  switch (env) {
    // development
    case 'dev':
      return 'http://api.admin.covid.sstir.cn'
    // qa
    case 'qa':
      return 'http://10.11.0.91:9999'
    // production
    default:
      return 'http://api.admin.covid.sstir.cn'
  }
}

const appConfig = {
  baseUrl: getBaseUrl(),
  appToken: process.env.VUE_APP_TOKEN_KEY // token key
}

export default appConfig
