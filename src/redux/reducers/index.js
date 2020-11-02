import { combineReducers } from "redux";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
  rootAuth: authReducer,
  //   rootErrors: errorReducer,
});

export default rootReducer;
