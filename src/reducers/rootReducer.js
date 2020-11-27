import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";

export const rootReducer = combineReducers({
  //ui: uiReducer,
  alert: alertReducer,
});
