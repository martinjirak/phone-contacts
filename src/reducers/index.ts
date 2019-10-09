import { ApplicationState } from "../types";
import { combineReducers } from "redux";
import contacts from "./contacts";

export default combineReducers<ApplicationState>({
  contacts
});
