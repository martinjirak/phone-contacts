import * as actionTypes from "./actionTypes";
import { Contact } from "../types";

export const addContact = (contact: Contact) => ({
  type: actionTypes.ADD_PHONE_CONTACT,
  payload: contact
});
