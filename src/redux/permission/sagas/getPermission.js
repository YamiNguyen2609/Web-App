import { takeEvery, put } from 'redux-saga/effects'

import { ACTION, onFailure, onSuccess } from '../redux/getPermission'
import permissionAPI from '../../../services/PermissionAPI'
import { ApiResponseStatusCode } from '../../../helpers/Constants'
import { showLoading, hideLoading } from '../../app'

function* getRole(action) {
  try {
    var response = yield permissionAPI.getPermissions()
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
  yield takeEvery(ACTION, getRole)
}
