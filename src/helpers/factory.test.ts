import * as factory from "./factory";

const contacts = [
  {
    id: "",
    firstName: "Martin",
    lastName: "Jirak",
    phoneNumber: "+420 123 123 123",
    comment: ""
  }
];

const contacts2 = [
  {
    id: "MARTIN_JIRAK",
    firstName: "Martin",
    lastName: "Jirak",
    phoneNumber: "+420 123 123 123",
    comment: ""
  }
];

test("Id is generated correctly", () => {
  expect(factory.getId("Martin Jirak", contacts)).toBe("MARTIN_JIRAK");
  expect(factory.getId("Martin Jirak", contacts2)).toBe("MARTIN_JIRAK-2");
});

test("Phone number is formated correctly", () => {
  expect(factory.normalizePhoneNumber("123456789")).toBe("+420 123 456 789");
  expect(factory.normalizePhoneNumber("(+420) 12 34567 89")).toBe(
    "+420 123 456 789"
  );
  expect(factory.normalizePhoneNumber("+420-123456789")).toBe(
    "+420 123 456 789"
  );
  expect(factory.normalizePhoneNumber("+987123456789")).toBe(
    "+987 123 456 789"
  );
  expect(factory.normalizePhoneNumber("420123456789")).toBe("+420 123 456 789");
  expect(factory.normalizePhoneNumber("123")).toBe(undefined);
  expect(factory.normalizePhoneNumber("1234567890")).toBe(undefined);
});
