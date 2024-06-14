import partition from "./partition.js";
import { test, expect } from "@jest/globals";



test("checking if odd", () => {
    const isOdd = element => element % 2 !== 0
  expect(partition([1, 2, 3], isOdd)).toEqual([[1, 3], [2]]);
});

test("checking if short string", () => {
  const isShortString = (string) => string.length <= 4;
  expect(
    partition(
      ["yunas", "sena", "maryam", "tavija", "liv", "seb", "bukola"],
      isShortString
    )
  ).toEqual([
    ["sena", "liv", "seb"],
    ["yunas", "maryam", "tavija", "bukola"],
  ]);
});

test("checking if long string", () => {
  const isLongString = (string) => string.length > 4;
  expect(
    partition(
      ["yunas", "sena", "maryam", "tavija", "liv", "seb", "bukola"],
      isLongString
    )
  ).toEqual([
    ["yunas", "maryam", "tavija", "bukola"],
    ["sena", "liv", "seb"],
  ]);
});
