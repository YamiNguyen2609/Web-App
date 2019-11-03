import { combineReducers } from "redux";

import loginWithEmail from "./user/redux/loginWithEmail";
import handle from "../redux/app/redux/handle";

const rootReducer = combineReducers({
  loginWithEmail,
  handle
});

export default rootReducer;
