import { takeEvery, put, all } from 'redux-saga/effects'

import {
  ACTION_ADD,
  ACTION_REMOVE,
  ACTION_UPDATE,
  onFailure,
  onSuccess,
  onRefresh
} from '../redux/HandleRedux'
import handleAPI from '../../../services/HandleServiceAPI'
import { ApiResponseStatusCode } from '../../../helpers/Constants'
import { showLoading, hideLoading } from '../../app'

function* onCreate(action) {
  try {
    yield put(showLoading())
    var response = yield handleAPI.onCreate(action.api, action.params)
    if (response.status_code === ApiResponseStatusCode.SUCCESS) {
      yield put(onSuccess(response.response))
      yield put(hideLoading())
      yield put(onRefresh())
    } else {
      yield put(onFailure(response.status))
    }
  } catch (error) {
    yield put(onFailure(JSON.stringify(error)))
  }
}

function* onUpdate(action) {
  try {
    yield put(showLoading())
    var response = yield handleAPI.onUpdate(action.api, action.params)
    if (response.status_code === ApiResponseStatusCode.SUCCESS) {
      yield put(onSuccess(response.response))
      yield put(hideLoading())
    } else {
      yield put(onFailure(response.status))
    }
  } catch (error) {
    yield put(onFailure(JSON.stringify(error)))
  }
}

function* onDelete(action) {
  try {
    yield put(showLoading())
    var response = yield handleAPI.onDelete(action.api, action.id)
    if (response.status_code === ApiResponseStatusCode.SUCCESS) {
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
  yield all([
    takeEvery(ACTION_ADD, onCreate),
    takeEvery(ACTION_UPDATE, onUpdate),
    takeEvery(ACTION_REMOVE, onDelete)
  ])
}
