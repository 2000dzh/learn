import axios from 'axios'
import type { RegisterUser } from '@/views/Register'
import type { CreateBook } from '@/views/BookManage/CreateBookModal'

const axiosInstance = axios.create({
  baseURL: '',
  timeout: 3000,
})

export function _to<T, U = Error>(promise: Promise<T>, errorExt?: object) {
  return promise
    .then<[null, T]>((res) => [null, res])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt)
        return [parsedError, undefined]
      }
      return [err, undefined]
    })
}

export function register(data: Pick<RegisterUser, 'username' | 'password'>) {
  return axiosInstance({
    method: 'post',
    url: '/user/register',
    data,
  })
}

export function login(data: Pick<RegisterUser, 'username' | 'password'>) {
  return axiosInstance({
    method: 'post',
    url: '/user/login',
    data,
  })
}

export function list(params?: { name: string }) {
  return axiosInstance({
    method: 'get',
    url: '/book/list',
    params,
  })
}

export function create(data: CreateBook) {
  return axiosInstance({
    method: 'post',
    url: '/book/create',
    data,
  })
}

export function update(data: CreateBook & { id: number }) {
  return axiosInstance({
    method: 'put',
    url: '/book/update',
    data,
  })
}

export function deleteBook(params: { id: number }) {
  return axiosInstance({
    method: 'delete',
    url: `book/delete/${params.id}`,
  })
}
