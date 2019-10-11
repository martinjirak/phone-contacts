import { normalizePhoneNumber } from "./factory";

export const validateName = (value: string) => {
  let error;
  if (!value.trim()) {
    error = "Required";
  }
  return error;
};

export const validatePhone = (value: string) => {
  let error;

  const phoneNumber = normalizePhoneNumber(value);
  if (!phoneNumber) {
    error = "Required";
  }
  return error;
};
