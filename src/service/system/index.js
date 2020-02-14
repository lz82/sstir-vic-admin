import { AppPost } from '@/utils/request'

/**
 * 修改密码
 */
export function changePwd (data) {
  return AppPost('/changePwd', data)
}
