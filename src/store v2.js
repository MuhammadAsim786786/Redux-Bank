import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountreducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  account: accountreducer,
  customer: customerReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
