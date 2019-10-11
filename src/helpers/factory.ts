import { Contact } from "../types";
import * as R from "ramda";

export const normalizePhoneNumber = (value: string) => {
  let phoneNumber;
  if (!value.trim()) return undefined;

  let digits = value.replace(/\D/g, "");
  if (digits.length !== 9 && digits.length !== 12) return undefined;

  let digitsArray = digits.match(/.{1,3}/g);

  if (!!digitsArray && digitsArray.length === 4) {
    phoneNumber = `+${R.join(" ", digitsArray)}`;
  }

  if (!!digitsArray && digitsArray.length === 3) {
    phoneNumber = `+420 ${R.join(" ", digitsArray)}`;
  }

  return phoneNumber;
};

export const getId = (value: string, contacts: Contact[]) => {
  const sanitizedName = R.pipe(
    (val: string) => val.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    R.toUpper,
    R.split(" "),
    R.join("_")
  )(value);

  const escape = (s: string) => s.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
  const createRe = (s: string) => new RegExp(`^${escape(s)}(-(\\d+))?$`);

  const count = R.pipe(
    R.filter(R.propSatisfies(R.test(createRe(sanitizedName)), "id")),
    R.length as any
  )(contacts) as number;

  if (count === 0) {
    return sanitizedName;
  }

  return `${sanitizedName}-${count + 1}`;
};
