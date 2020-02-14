import { AppPost, AppGet } from '@/utils/request'

/**
 * 判断登录
 */
export function checkLogin(data) {
  return AppPost('/sys/checkLogin', data)
}

/**
 * 获取用户权限
 */
export function getUserRole() {
  return AppPost('/getUserRole')
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  return AppGet('/sys/getUserInfo')
}
