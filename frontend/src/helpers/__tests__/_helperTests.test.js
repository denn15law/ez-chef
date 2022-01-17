import { convertServings } from "../helperFunctions";

test("should return the correct value of conversion as int", () => {
  const currentServings = 1;
  const targetedServings = 2;
  const currentMeasurement = 2;
  const result = convertServings(
    currentServings,
    targetedServings,
    currentMeasurement
  );
  expect(result).toEqual(4);
});

test("should return correct value when given strings", () => {
  const currentServings = "1";
  const targetedServings = "2";
  const currentMeasurement = "2";
  const result = convertServings(
    currentServings,
    targetedServings,
    currentMeasurement
  );
  expect(result).toEqual(4);
});

test("should return the correct value when given fractions as strings", () => {
  const currentServings = "1";
  const targetedServings = "2";
  const currentMeasurement = "1/2";
  const result = convertServings(
    currentServings,
    targetedServings,
    currentMeasurement
  );
  expect(result).toEqual(1);
});

test("should return the correct value when given any combination of strings, ints and fractions", () => {
  const currentServings = "1";
  const targetedServings = "2";
  const currentMeasurement = "1/2";
  const result = convertServings(
    currentServings,
    targetedServings,
    currentMeasurement
  );
  expect(result).toEqual(1);
});
