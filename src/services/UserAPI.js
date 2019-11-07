import axios from './AxiosUserConfig'
import FormData from 'form-data'

import { Users } from '../test'

const loginWithEmail = async (username, password) => {
  const data = new FormData()
  data.append('UserName', username)
  data.append('Password', password)
  //return axios.post(LOGIN_WITH_EMAIL, data)

  return {
    status: 'OK',
    status_code: '200',
    response: {
      id: 2,
      userName: 'thuan@gmail.com',
      email: 'thuan@gmail.com',
      fullName: 'Nguyễn Trường Thuận',
      avatar: '',
      permissions: null,
      phoneNumber: '023846987',
      letterAvatar: 'NTT',
      type: 2,
      isNew: false
    }
  }
}

const getUsers = async (username, password) => {
  const data = new FormData()
  data.append('UserName', username)
  data.append('Password', password)
  //return axios.post(LOGIN_WITH_EMAIL, data)

  return {
    status: 'OK',
    status_code: '200',
    response: Users
  }
}

export default {
  loginWithEmail,
  getUsers
}
