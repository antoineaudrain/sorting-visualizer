import { algorythms, animationStatus, createAnimationArr, swap } from './helpers'

const bubbleSort = (arr) => {
  const animations = []

  for (let i = 0; i < arr.length; i++){
    for (let j = 0, stop = arr.length - i - 1; j < stop; j++){
      const currItem = arr[j];
      const nextItem = arr[j + 1];
      animations.push(createAnimationArr(arr, j, animationStatus.COMPARING))
      if (currItem.value > nextItem.value){
        animations.push(createAnimationArr(arr, j, animationStatus.SWAPPING))
        swap(arr, j, j + 1)
        animations.push(createAnimationArr(arr, j, animationStatus.SWAPPED))      
      }
      animations.push(createAnimationArr(arr, j, animationStatus.NONE))
    }
  }

  return animations;
}

export default (arr, algorythm) => {
  const values = [...arr]

  switch (algorythm) {
    case algorythms.BUBBLE_SORT:
      return bubbleSort(values)
    default:
      return null;
  }
}