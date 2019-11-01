import { combineReducers } from 'redux'

import loginWithEmail from './user/redux/loginWithEmail'

const rootReducer = combineReducers({
  loginWithEmail
})

export default rootReducer
