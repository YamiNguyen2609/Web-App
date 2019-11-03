import { fork, all } from "redux-saga/effects";

import loginWithEmail from "./user/sagas/loginWithEmail";
import getInfoUser from "./user/sagas/getInfoUser";
import handle from "./app/sagas/handle";

export default function* rootSaga() {
  yield all([fork(loginWithEmail), fork(getInfoUser), fork(handle)]);
}
