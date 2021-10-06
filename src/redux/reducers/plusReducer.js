import { PLUS, MINUS } from '../types'

const initialState = 0

export const plusReducer = (state = initialState, action) => {
    switch(action.type) {
      case PLUS:
        return state + 1;
      case MINUS: 
        return state - 1

      default: return state
    }
  }