import { combineReducers } from 'redux'

import app from './app'
import loginWithEmail from './user/redux/loginWithEmail'
import getModule from './module/redux/getModule'
import getUser from './user/redux/getUser'
import getRole from './role/redux/getRole'

const rootReducer = combineReducers({
  app,
  loginWithEmail,
  getModule,
  getUser,
  getRole
})

export default rootReducer
