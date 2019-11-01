import { fork, all } from 'redux-saga/effects'

import loginWithEmail from './user/sagas/loginWithEmail'
import getInfoUser from './user/sagas/getInfoUser'

export default function* rootSaga() {
  yield all([fork(loginWithEmail), fork(getInfoUser)])
}
