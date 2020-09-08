import {
  SET_THEME,
  SET_INITIAL_ARRAY,
  SET_ALGORITHM,
  SET_SPEED,
  SET_SIZE
} from '../constants'

export const setTheme = (theme) => ({
  type: SET_THEME,
  theme
})

export const setInitialArray = (arr) => ({
  type: SET_INITIAL_ARRAY,
  arr
})

export const setAlgorithm = (algorithm) => ({
  type: SET_ALGORITHM,
  algorithm
})

export const setSpeed = (speed) => ({
  type: SET_SPEED,
  speed
})

export const setSize = (size) => ({
  type: SET_SIZE,
  size
})
