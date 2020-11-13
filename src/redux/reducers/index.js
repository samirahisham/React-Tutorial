import { combineReducers } from "redux";
import authReducer from "./authReducer";
import itemsReducer from "./itemsReducer";
import errorReducer from "./errorReducer";
const rootReducer = combineReducers({
  rootAuth: authReducer,
  rootItems: itemsReducer,
  rootErrors: errorReducer,
});

export default rootReducer;
