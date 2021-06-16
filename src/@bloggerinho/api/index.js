import axios from 'axios'
import { store } from '../../config/store'

function serviceApi (tokenKey) {
  const api = axios.create({
    baseURL: 'http://ec2-54-232-158-24.sa-east-1.compute.amazonaws.com:8080'
  })

  api.interceptors.request.use(function (config) {
    const token = store.getState().User.token
    config.headers.Authorization = `Bearer ${token}`
    return config
  })

  return api
}

export default serviceApi
