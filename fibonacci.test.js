import { fibsI, fibsR } from "./fibonacci.js";

/* eslint-disable no-undef */

test("Iterative fibonacci - Standard", () => {
  const expectedResult = [0, 1, 1, 2, 3, 5, 8, 13, 21];

  expect(fibsI(8)).toEqual(expectedResult);
});

test("Iterative fibonacci - Argument not provided", () => {
  expect(() => fibsI()).toThrow(Error);
});

test("Iterative fibonacci - Invalid argument", () => {
  expect(() => fibsI("hello")).toThrow(TypeError);
});

test("Iterative fibonacci - Negative number", () => {
  expect(() => fibsI(-1)).toThrow(RangeError);
});

test("Iterative fibonacci - Non-integer", () => {
  expect(() => fibsI(2.3)).toThrow(Error);
});

test("Recursive fibonacci - Standard", () => {
  const expectedResult = [0, 1, 1, 2, 3, 5, 8, 13, 21];

  expect(fibsR(8)).toEqual(expectedResult);
});

test("Recursive fibonacci - Argument not provided", () => {
  expect(() => fibsR()).toThrow(Error);
});

test("Recursive fibonacci - Invalid argument", () => {
  expect(() => fibsR("hello")).toThrow(TypeError);
});

test("Recursive fibonacci - Negative number", () => {
  expect(() => fibsR(-1)).toThrow(RangeError);
});

test("Recursive fibonacci - Non-integer", () => {
  expect(() => fibsR(2.3)).toThrow(Error);
});

/* eslint-enable no-undef */
