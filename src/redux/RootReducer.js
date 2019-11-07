import { combineReducers } from 'redux'

import app from './app'
import handle from './app/redux/HandleRedux'
import loginWithEmail from './user/redux/loginWithEmail'
import getModule from './module/redux/getModule'
import getUser from './user/redux/getUser'
import getRole from './role/redux/getRole'
import getPermission from './permission/redux/getPermission'

const rootReducer = combineReducers({
  app,
  loginWithEmail,
  getModule,
  getUser,
  getRole,
  getPermission,
  handle
})

export default rootReducer
