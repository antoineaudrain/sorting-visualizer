export const animationStatus = {
  COMPARING: 'COMPARING',
  SWAPPING: 'SWAPPING',
  SWAPPED: 'SWAPPED',
  NONE: 'NONE'
}

export const createRandomArr = (length, minValue = 5, maxValue = 100) =>
  Array.from({ length }, () => Math.floor(Math.random() * (maxValue - minValue + 1) + minValue));

export const sleep = async (ms) => new Promise((fn) => setTimeout(fn, ms));

export const swap = (arr, firstIndex, secondIndex) => {
  const tmp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tmp;
}

export const createAnimationArr = (arr, currIndex, status) => arr.map((value, index) => ({
  index,
  value,
  status: (status !== 'NONE' && (index === (currIndex || currIndex+1) ? status : 'NONE')) || 'NONE'
}))