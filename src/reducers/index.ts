import { combineReducers } from "redux";
import { reducer as contacts } from "./contacts";

export const appReducers = combineReducers({
  contacts
});
