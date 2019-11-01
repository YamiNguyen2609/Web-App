import { takeEvery, put } from 'redux-saga/effects'

import { ACTION, onFailure, onSuccess } from '../redux/loginWithEmail'
import userAPI from '../../../services/UserAPI.js'
import { ApiResponseStatusCode } from '../../../helpers/Constants'
import { sessionLogin } from '../../../helpers/LocalStorage'

function* loginWithEmail(action) {
  try {
    var response = yield userAPI.loginWithEmail(action.email, action.password)
    if (response.status_code == ApiResponseStatusCode.SUCCESS) {
      yield put(onSuccess(response.response))
      sessionLogin(response.response)
    } else {
      yield put(onFailure(response.status))
    }
  } catch (error) {
    yield put(onFailure(JSON.stringify(error)))
  }
}

function* sleep(time) {
  yield new Promise(resolve => setTimeout(resolve, time))
}

export default function* saga() {
  yield takeEvery(ACTION, loginWithEmail)
}
