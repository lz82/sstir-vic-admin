import { AppGet } from '@/utils/request'

/**
 * 查询任务分页数据
 */
export function queryTasklist(data) {
  return AppGet('/task/queryList', data)
}
