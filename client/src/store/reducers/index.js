import {
  SET_SPEED,
  SET_THEME
} from '../constants'

const initialState = {
  speed: 500,
  theme: 'dark'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SPEED:
      return {
        ...state,
        speed: action.speed
      }
    case SET_THEME:
      return {
        ...state,
        theme: action.theme
      }
    default:
      return initialState
  }
}
