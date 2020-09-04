export const createRandomArr = (length, minValue = 5, maxValue = 100) =>
  Array.from({ length }, () => Math.floor(Math.random() * (maxValue - minValue + 1) + minValue));