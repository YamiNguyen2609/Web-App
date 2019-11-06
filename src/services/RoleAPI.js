import axios from './AxiosUserConfig'
import FormData from 'form-data'

const Roles = [
  { id: 1, name: 'Administrator' },
  { id: 2, name: 'Editor' },
  { id: 3, name: 'Manager' },
  { id: 4, name: 'User' }
]

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
