import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
// import { getItems } from "./actions";
import { checkExpiredToken } from "./actions/authActions";
import rootReducer from "./reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const APPSTORE = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
APPSTORE.dispatch(checkExpiredToken());
// APPSTORE.dispatch(getItems()); // if no auth is required

export default APPSTORE;
