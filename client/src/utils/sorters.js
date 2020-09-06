import { animationStatus, createAnimationArr, swap } from '../utils/helpers'

export const bubbleSort = (arr) => {
  const animations = []

  for (let i = 0; i < arr.length; i++){
    for (let j = 0, stop = arr.length - i; j < stop; j++){
      animations.push(createAnimationArr(arr, j, animationStatus.COMPARING))
      if (arr[j] > arr[j+1]){
        animations.push(createAnimationArr(arr, j, animationStatus.SWAPPING))
        swap(arr, j, j + 1)
        animations.push(createAnimationArr(arr, j, animationStatus.SWAPPED))      
      }
      animations.push(createAnimationArr(arr, j, animationStatus.NONE))
    }
  }

  return animations;
}