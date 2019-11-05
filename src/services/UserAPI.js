import axios from './AxiosUserConfig'
import FormData from 'form-data'

const LOGIN_WITH_EMAIL = '/Account/Login'

const Users = [
  {
    id: 1,
    userName: 'thuan@gmail.com',
    email: 'thuan@gmail.com',
    fullName: 'Nguyễn Trường Thuận',
    avatar: '',
    permissions: null,
    phoneNumber: '023846987',
    letterAvatar: 'NTT',
    type: 2,
    isNew: false
  },
  {
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
  },
  {
    id: 3,
    userName: 'thuan@gmail.com',
    email: 'thuan@gmail.com',
    fullName: 'Nguyễn Trường Thuận',
    avatar: '',
    permissions: null,
    phoneNumber: '023846987',
    letterAvatar: 'NTT',
    type: 2,
    isNew: false
  },
  {
    id: 4,
    userName: 'thuan@gmail.com',
    email: 'thuan@gmail.com',
    fullName: 'Nguyễn Trường Thuận',
    avatar: '',
    permissions: null,
    phoneNumber: '023846987',
    letterAvatar: 'NTT',
    type: 2,
    isNew: false
  },
  {
    id: 5,
    userName: 'thuan@gmail.com',
    email: 'thuan@gmail.com',
    fullName: 'Nguyễn Trường Thuận',
    avatar: '',
    permissions: null,
    phoneNumber: '023846987',
    letterAvatar: 'NTT',
    type: 2,
    isNew: false
  },
  {
    id: 6,
    userName: 'thuan@gmail.com',
    email: 'thuan@gmail.com',
    fullName: 'Nguyễn Trường Thuận',
    avatar: '',
    permissions: null,
    phoneNumber: '023846987',
    letterAvatar: 'NTT',
    type: 2,
    isNew: false
  },
  {
    id: 7,
    userName: 'thuan@gmail.com',
    email: 'thuan@gmail.com',
    fullName: 'Nguyễn Trường Thuận',
    avatar: '',
    permissions: null,
    phoneNumber: '023846987',
    letterAvatar: 'NTT',
    type: 2,
    isNew: false
  },
  {
    id: 8,
    userName: 'thuan@gmail.com',
    email: 'thuan@gmail.com',
    fullName: 'Nguyễn Trường Thuận',
    avatar: '',
    permissions: null,
    phoneNumber: '023846987',
    letterAvatar: 'NTT',
    type: 2,
    isNew: false
  },
  {
    id: 9,
    userName: 'thuan@gmail.com',
    email: 'thuan@gmail.com',
    fullName: 'Nguyễn Trường Thuận',
    avatar: '',
    permissions: null,
    phoneNumber: '023846987',
    letterAvatar: 'NTT',
    type: 2,
    isNew: false
  },
  {
    id: 10,
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
]

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
