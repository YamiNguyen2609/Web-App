import { takeEvery, put } from 'redux-saga/effects'

import { ACTION, onFailure, onSuccess } from '../redux/getUser'
import userAPI from '../../../services/UserAPI.js'
import { ApiResponseStatusCode } from '../../../helpers/Constants'
import { showLoading, hideLoading } from '../../app'
import { Colors } from '../../../themes'

function* loginWithEmail(action) {
  try {
    yield put(showLoading())
    var response = yield userAPI.getUsers()
    if (response.status_code == ApiResponseStatusCode.SUCCESS) {
      yield put(onSuccess(response.response))
      yield put(hideLoading())
    } else {
      yield put(onFailure(response.status))
    }
  } catch (error) {
    yield put(onFailure(JSON.stringify(error)))
  }
}

export default function* saga() {
  yield takeEvery(ACTION, loginWithEmail)
}
