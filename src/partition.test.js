import partition from "./partition.js";
import { test, expect } from "@jest/globals";

test("checking if odd", () => {
  const isOdd = (element) => element % 2 !== 0;
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

test("check if object has property", () => {
  const vehicles = [
    { type: "car", name: "Audi", owner: "Bob" },
    { type: "car", name: "Honda" },
    { type: "bicycle", name: "Supra" },
    { type: "car", name: "Mercedes", owner: "Sara" },
    { type: "motorbike", name: "Suzuki" },
    { type: "motorbike", name: "Ducartiti", owner: "Bob" },
    { type: "plane", name: "47" },
  ];

  const hasOwner = (vehicle) => vehicle.hasOwnProperty("owner");
  expect(partition(vehicles, hasOwner)).toEqual([
    [
      { type: "car", name: "Audi", owner: "Bob" },
      { type: "car", name: "Mercedes", owner: "Sara" },
      { type: "motorbike", name: "Ducartiti", owner: "Bob" },
    ],
    [
      { type: "car", name: "Honda" },
      { type: "bicycle", name: "Supra" },
      { type: "motorbike", name: "Suzuki" },
      { type: "plane", name: "47" },
    ],
  ]);
});
