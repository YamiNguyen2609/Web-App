import { takeEvery, put } from 'redux-saga/effects'

import { ACTION, onFailure, onSuccess } from '../redux/getModule'
import moduleAPI from '../../../services/ModuleAPI'
import { ApiResponseStatusCode } from '../../../helpers/Constants'
import { showLoading, hideLoading } from '../../app'

function* getModule(action) {
  try {
    var response = yield moduleAPI.getData(action.userId)
    if (response.status_code === ApiResponseStatusCode.SUCCESS) {
      yield put(onSuccess(response.response))
      //yield put(hideLoading())
    } else {
      yield put(onFailure(response.status))
    }
  } catch (error) {
    yield put(onFailure(JSON.stringify(error)))
  }
}

export default function* saga() {
  yield takeEvery(ACTION, getModule)
}
