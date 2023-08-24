import mergeSort from "./mergeSort.js";

/* eslint-disable no-undef */

test("Merge sort - Standard numerical", () => {
  const input = [4, 8, 6, 2, 1, 7, 5, 3];
  const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8];

  expect(mergeSort(input)).toEqual(expectedResult);
});

/* eslint-enable no-undef */
