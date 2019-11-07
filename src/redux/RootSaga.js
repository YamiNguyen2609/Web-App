import { fork, all } from 'redux-saga/effects'

import handle from './app/sagas/HandleSaga'
import loginWithEmail from './user/sagas/loginWithEmail'
import getInfoUser from './user/sagas/getInfoUser'
import getModule from './module/sagas/getModule'
import getUser from './user/sagas/getUser'
import getRole from './role/sagas/getRole'
import getPermission from './permission/sagas/getPermission'

export default function* rootSaga() {
  yield all([
    fork(loginWithEmail),
    fork(getInfoUser),
    fork(getModule),
    fork(getUser),
    fork(getRole),
    fork(getPermission),
    fork(handle)
  ])
}
