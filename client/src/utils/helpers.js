export const animationStatus = {
  COMPARING: 'COMPARING',
  SWAPPING: 'SWAPPING',
  SWAPPED: 'SWAPPED',
  NONE: 'NONE'
};

export const algorithms = {
  BUBBLE_SORT: 'BUBBLE_SORT'
};

export const algorithmItems = [
  { label: 'Bubble Sort', value: algorithms.BUBBLE_SORT, selected: true }
];

export const createRandomArr = (length, minValue = 5, maxValue = 100) =>
  Array.from({ length }, (_, index) => ({index, value: Math.floor(Math.random() * (maxValue - minValue + 1) + minValue), status: 'NONE' }));

export const sleep = async (ms) => new Promise((fn) => setTimeout(fn, ms));

export const swap = (arr, firstIndex, secondIndex) => {
  const tmp = arr[firstIndex].value;
  arr[firstIndex].value = arr[secondIndex].value;
  arr[secondIndex].value = tmp;
};

export const createAnimationArr = (arr, currIndex, newStatus) => arr.map(({ value, status }, index) => ({
  index,
  value,
  status: (status !== animationStatus.NONE && (index === (currIndex || currIndex+1) ? newStatus : animationStatus.NONE)) || animationStatus.NONE
}));