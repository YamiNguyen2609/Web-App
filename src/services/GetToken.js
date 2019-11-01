import { config } from '../helpers/Constants'
import FormData from 'form-data'
import axios from 'axios'

const getToken = async () => {
  const data = new FormData()
  data.append('client_id', config.clientId)
  data.append('client_secret', config.clientSecret)
  data.append('grant_type', config.grantType)
  return axios.post('http://45.119.83.78:7740/connect/token', data)
}

export default { getToken }
