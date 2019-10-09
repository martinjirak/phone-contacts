import { combineReducers } from "redux";
import { reducer as contacts, State as ContactsState } from "./contacts";

export interface ApplicationState {
  contacts: ContactsState;
}

export const appReducers = combineReducers<ApplicationState>({
  contacts
});
