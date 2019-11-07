import axios from './AxiosUserConfig'
import FormData from 'form-data'

import { Permissions } from '../test'

const getPermissions = async () => {
  //return axios.post(LOGIN_WITH_EMAIL, data)

  return {
    status: 'OK',
    status_code: '200',
    response: Permissions
  }
}

export default {
  getPermissions
}
