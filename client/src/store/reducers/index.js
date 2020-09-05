import {
  SET_THEME,
  SET_INITIAL_ARRAY,
  SET_SPEED,
  SET_SIZE
} from '../constants'

const initialState = {
  theme: 'dark',
  initialArray: [],
  speed: 500,
  size: 24
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.theme
      }
    case SET_INITIAL_ARRAY:
      return {
        ...state,
        initialArray: action.arr
      }
    case SET_SPEED:
      return {
        ...state,
        speed: action.speed
      }
    case SET_SIZE:
      return {
        ...state,
        size: action.size
      }
    default:
      return initialState
  }
}
