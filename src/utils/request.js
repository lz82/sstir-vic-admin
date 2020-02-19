import instance from './axios'
import axios from 'axios'
import qs from 'qs'

const CancelToken = axios.CancelToken

let sources = []

export function AppPost(url, data) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, qs.stringify(data), {
        // 取消请求
        cancelToken: new CancelToken(function executor(c) {
          // An executor function receives a cancel function as a parameter
          sources.push(c)
        })
      })
      .then((res) => {
        console.log(res)
        if (res.data.code === '200') {
          resolve(res.data.data)
        } else {
          reject(res.data.msg)
        }
      })
      .catch(() => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('服务器错误，请重试')
      })
  })
}

export function AppGet(url, data) {
  return new Promise((resolve, reject) => {
    instance
      .get(
        url,
        {
          params: {
            ...data
          },
          paramsSerializer: params => {
            return qs.stringify(params, { indices: false })
          }
        },
        {
          cancelToken: new CancelToken(function executor(c) {
            sources.push(c)
          })
        }
      )
      .then((res) => {
        if (res.data.code === '200') {
          resolve(res.data.data)
        } else {
          reject(res.data.message)
        }
      })
      .catch(() => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('服务器错误，请重试')
      })
  })
}

export { sources }
