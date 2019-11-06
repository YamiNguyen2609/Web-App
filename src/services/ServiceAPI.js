import axios from './AxiosUserConfig'
import FormData from 'form-data'

const getData = (api, params) => {
  return axios.get(api, params)
}

const getSingleData = (api, params) => {
  return axios.get(api, params)
}

export default {
  getData,
  getSingleData
}
