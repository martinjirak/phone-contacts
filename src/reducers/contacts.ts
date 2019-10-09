import { Reducer } from "redux";
import { ApplicationState } from "../types";

export const initialState: ApplicationState = {};

const conatcts: Reducer<ApplicationState> = (state = initialState, action) => {
  switch (action.type) {
    // TODO: ...
    default:
      return state;
  }
};

export default conatcts;
