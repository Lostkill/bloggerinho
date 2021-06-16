import axios from 'axios'
import { store } from '../../config/store'

function serviceApi () {
  const api = axios.create({
    baseURL: process.env.REACT_APP_URL_API
  })

  api.interceptors.request.use(function (config) {
    const token = store.getState().User.token
    config.headers.Authorization = `Bearer ${token}`
    return config
  })

  return api
}

export default serviceApi
