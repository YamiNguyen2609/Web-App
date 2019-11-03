import { takeEvery, put } from "redux-saga/effects";

import {
  ACTION,
  ACTION_CREATE,
  ACTION_UPDATE,
  ACTION_DELETE,
  onSuccess,
  onFailure,
  onHandleSuccess
} from "../redux/handle";

import { ApiResponseStatusCode } from "../../../helpers/Constants";

function* getData(action) {
  try {
    console.log(action);
    import("../../../services/" + action.controller + "API.js").then(
      async api => {
        try {
          console.log(action);
          var response = await api.getData(action.params);
          console.log(response);
          if (response.status_code == ApiResponseStatusCode.SUCCESS) {
            await put(onSuccess(response.response));
          } else {
            await put(onFailure(response.status));
          }
        } catch (error) {
          await put(onFailure(JSON.stringify(error)));
        }
      }
    );
  } catch (error) {
    yield put(onFailure(JSON.stringify(error)));
  }
}

function* create(action) {
  try {
    import("../../../services/" + action.controller + "API.js").then(
      async api => {
        try {
          var response = await api.create(action.params);

          if (response.status_code == ApiResponseStatusCode.SUCCESS) {
            await put(onHandleSuccess(response.response));
          } else {
            await put(onFailure(response.status));
          }
        } catch (error) {
          await put(onFailure(JSON.stringify(error)));
        }
      }
    );
  } catch (error) {
    yield put(onFailure(JSON.stringify(error)));
  }
}

function* update(action) {
  try {
    import("../../../services/" + action.controller + "API.js").then(
      async api => {
        try {
          var response = await api.update(action.params);
          if (response.status_code == ApiResponseStatusCode.SUCCESS) {
            await put(onHandleSuccess(response.response));
          } else {
            await put(onFailure(response.status));
          }
        } catch (error) {
          await put(onFailure(JSON.stringify(error)));
        }
      }
    );
  } catch (error) {
    yield put(onFailure(JSON.stringify(error)));
  }
}

function* remove(action) {
  try {
    import("../../../services/" + action.controller + "API.js").then(
      async api => {
        try {
          var response = await api.remove(action.params);
          if (response.status_code == ApiResponseStatusCode.SUCCESS) {
            await put(onHandleSuccess(response.response));
          } else {
            await put(onFailure(response.status));
          }
        } catch (error) {
          await put(onFailure(JSON.stringify(error)));
        }
      }
    );
  } catch (error) {
    yield put(onFailure(JSON.stringify(error)));
  }
}

function* sleep(time) {
  yield new Promise(resolve => setTimeout(resolve, time));
}

export default function* saga() {
  yield takeEvery(ACTION, getData);
  yield takeEvery(ACTION_CREATE, create);
  yield takeEvery(ACTION_UPDATE, update);
  yield takeEvery(ACTION_DELETE, remove);
}
