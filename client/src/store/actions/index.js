import {
  SET_SPEED,
  SET_THEME
} from '../constants'

export const setSpeed = (speed) => ({
  type: SET_SPEED,
  speed
})

export const setTheme = (theme) => ({
  type: SET_THEME,
  theme
})
