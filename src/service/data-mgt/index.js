import { AppGet } from '@/utils/request'

/**
 * 查询数据分页数据
 */
export function queryDatalist(data) {
  return AppGet('/data/queryList', data)
}
