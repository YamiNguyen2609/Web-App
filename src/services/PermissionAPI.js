import axios from './AxiosUserConfig'
import FormData from 'form-data'

const Permissions = [
  { id: 1, name: 'truy cập người dùng', controllerName: 'User' },
  { id: 2, name: 'truy cập quyền', controllerName: 'Role' },
  { id: 3, name: 'truy cập chi tiết quyền', controllerName: 'Permission' },
  { id: 4, name: 'truy cập module', controllerName: 'Module' }
]

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
