import { AppPost, AppGet } from '@/utils/request'

// 获取公司信息
export function getCompanyInfo () {
  return AppGet('/company/info')
}

// 保存公司信息
export function saveCompanyInfo(data) {
  return AppPost('/company/editInfo', data)
}

// 获取部门树形结构数据
export function getDeptTree() {
  return AppGet('/dept/tenant')
}

// 新增部门
export function createDept(data) {
  return AppPost('/dept/add', data)
}

// 获取部门列表
export function getDeptList() {
  return AppGet('/dept/list')
}

// 编辑部门
export function editDept(data) {
  return AppPost('/dept/edit', data)
}

// 删除部门
export function delDept(deptId) {
  return AppPost('/dept/del', {
    deptId
  })
}

// 获取职级列表
export function getJobLevelList() {
  return AppGet('/settings/jobLevel/list')
}

// 编辑职位等级
export function editJobLevel(data) {
  return AppPost('/settings/jobLevel/edit', data)
}

// 删除职位等级
export function delJobLevel(id) {
  return AppPost('/settings/jobLevel/del', {
    id
  })
}

// 获取职能列表
export function getJobTypeList() {
  return AppGet('/settings/jobType/list')
}

// 编辑职能类型
export function editJobType(data) {
  return AppPost('/settings/jobType/edit', data)
}

// 删除职能类型
export function delJobType(id) {
  return AppPost('/settings/jobType/del', {
    id
  })
}

// 获取招聘阶段列表
export function getStageList(data) {
  return AppGet('/prg/stage/list', data)
}

// 编辑招聘阶段
export function editStage(data) {
  return AppPost('/prg/stage/edit', data)
}

/**
 * 修改招聘阶段状态
 * @param {id} 招聘阶段主键
 * @param {status} 招聘阶段状态：
 *                 1: 启动
 *                 0: 禁用
 */
export function modifyStageStatus(id, status) {
  return AppPost('/prg/stage/modify', {
    id,
    status
  })
}

// 获取招聘流程列表
export function getProcessList(data) {
  return AppGet('/prg/template/list', data)
}

// 获取非系统默认阶段
export function getOptionalStage() {
  return AppGet('/prg/stage/listNonSystem')
}

// 获取系统默认流程
export function getDefaultProcess() {
  return AppGet('/prg/stage/systemDefault')
}

// 保存招聘流程模板
export function SaveProcessTemplate(data) {
  return AppPost('/prg/template/editAndSave', data)
}

// 获取招聘流程模板详情
export function GetProcessDetail(templateId) {
  return AppGet('/prg/template/detail', { templateId })
}

// 复制招聘流程模板
export function CopyProcessTemplate(data) {
  return AppPost('/prg/template/copy', data)
}

// 获取流程模板中阶段列表
export function GetProcessStageListById(templateId) {
  return AppGet('/prg/template/stages', { templateId })
}

// 获取面试评价表
export function GetInterviewFormList() {
  return AppGet('/settings/interviewForm/list')
}

// 查询用户列表
export function QueryUserList(data) {
  return AppGet('/user/queryUsers', data)
}

// 获取用户详情
export function GetUserInfo(userId) {
  return AppGet(`/user/showUser?userId=${userId}`)
}

// 保存用户信息
export function SaveUserInfo(data) {
  return AppPost('/user/saveUser', data)
}

// 删除用户
export function DeleteUser(userId) {
  return AppPost(`/user/delUser?userId=${userId}`)
}

// 查询所有角色
export function QueryRoleList() {
  return AppGet('/user/role/listAllRoles')
}

// 查询角色分页数据
export function QueryPagedRole(data) {
  return AppGet('/user/role/queryRoles', data)
}

// 获取角色详情
export function GetRoleInfo(roleId) {
  return AppGet('/user/role/showRole', { roleId })
}

// 保存角色信息
export function SaveRoleInfo(data) {
  return AppPost('/user/role/saveRole', data)
}

// 删除角色
export function DeleteRole(roleId) {
  return AppPost(`/user/role/delRole/${roleId}`)
}
