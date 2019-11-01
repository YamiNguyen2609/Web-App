import axios from 'axios'
import _ from 'lodash'

const api = axios.create({
  baseURL: 'http://45.119.83.78:7740/api',
  headers: { 'Access-Control-Allow-Origin': '*' }
})
api.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      const message =
        _.get(error, 'response.data.error.common') ||
        _.get(error, 'response.data.message') ||
        _.get(error, 'response.data.errors.common')
      return Promise.reject({ message, code: error.response.status })
    } else if (error.request)
      return Promise.reject({ common: 'No response was received' })
    return Promise.reject({ common: error.message })
  }
)

export default api
