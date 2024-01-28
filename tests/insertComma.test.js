import { expect, test } from "vitest";
import { insertComma } from "../utilities";

test("Fill numbers with commas separated by 3 digits", () => {
  expect(insertComma()).toBe("");
  expect(insertComma(123)).toBe("123");
  expect(insertComma(1234)).toBe("1,234");
  expect(insertComma("1234567")).toBe("1,234,567");
});
