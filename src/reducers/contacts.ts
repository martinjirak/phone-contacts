import { Reducer } from "redux";
import { ContactsList } from "../types";

export interface State {
  contactsList: ContactsList | null;
}

export const initialState: State = {
  contactsList: null
};

export const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    // TODO: ...
    default:
      return state;
  }
};
