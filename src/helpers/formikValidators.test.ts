import * as validators from "./formikValidators";

test("Name can not be empty", () => {
  expect(validators.validateName("")).toBe("Required");
  expect(validators.validateName("  ")).toBe("Required");
});

test("Phone number is in correct format", () => {
  expect(validators.validatePhone("")).toBe("Required");
  expect(validators.validatePhone("123")).toBe("Required");
  expect(validators.validatePhone("123 123 12")).toBe("Required");
  expect(validators.validatePhone("(123) 123-121 231")).toBe(undefined);
});
