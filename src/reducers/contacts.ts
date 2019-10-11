import { Contact } from "../types";
import { Reducer } from "redux";
import * as actionTypes from "../actions/actionTypes";
import * as R from "ramda";

export interface State {
  phoneContacts: Contact[];
}

export const initialState: State = {
  phoneContacts: []
};

export const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PHONE_CONTACT:
      return {
        ...state,
        phoneContacts: R.append(action.payload, state.phoneContacts)
      };

    default:
      return state;
  }
};
