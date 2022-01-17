//Function that takes in current serving size, target serving size, and current measurement (check for / and strings and integer)

const convertServings = (
  currentServings,
  targetServing,
  currentMeasurement
) => {
  const multipler = targetServing / currentServings;

  return eval(currentMeasurement) * multipler;
};

module.exports = {
  convertServings,
};
