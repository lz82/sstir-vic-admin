import { AppGet } from '@/utils/request'

/**
 * 查询用户分页数据
 */
export function queryUserlist(data) {
  return AppGet('/user/queryList', data)
}
