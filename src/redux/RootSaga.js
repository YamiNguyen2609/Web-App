import { fork, all } from 'redux-saga/effects'

import loginWithEmail from './user/sagas/loginWithEmail'
import getInfoUser from './user/sagas/getInfoUser'
import getModule from './module/sagas/getModule'
import getUser from './user/sagas/getUser'
import getRole from './role/sagas/getRole'

export default function* rootSaga() {
  yield all([
    fork(loginWithEmail),
    fork(getInfoUser),
    fork(getModule),
    fork(getUser),
    fork(getRole)
  ])
}
