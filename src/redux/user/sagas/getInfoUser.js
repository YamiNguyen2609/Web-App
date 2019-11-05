import { takeEvery, put } from 'redux-saga/effects'

import { ACTION_INFO, onFailure, onSuccess } from '../redux/loginWithEmail'
import { getAccount } from '../../../helpers/LocalStorage'

function* getInfoUser(action) {
  try {
    const user = getAccount()
    if (user) {
      put(onSuccess(user))
    } else {
      yield put(onFailure(''))
    }
  } catch (error) {
    yield put(onFailure(JSON.stringify(error)))
  }
}

export default function* saga() {
  yield takeEvery(ACTION_INFO, getInfoUser)
}
