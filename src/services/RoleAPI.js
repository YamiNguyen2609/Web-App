import axios from './AxiosUserConfig'
import FormData from 'form-data'

import { Roles } from '../test'

const getRoles = async () => {
  //return axios.post(LOGIN_WITH_EMAIL, data)

  return {
    status: 'OK',
    status_code: '200',
    response: Roles
  }
}

export default {
  getRoles
}
