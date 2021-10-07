import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_FILL_FORM, SHOW_FILL_FORM } from '../types'

const initialState = {
    loading: false,
    alert: '',
    form: false
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
      case SHOW_LOADER:
        return {...state, loading: true};
      case HIDE_LOADER: 
        return {...state, loading: false};
      case SHOW_ALERT:
        return {...state, alert: action.payload}
      case SHOW_FILL_FORM:
        return {...state, form: true}
      case HIDE_FILL_FORM:
        return {...state, form: false}

      default: return state
    }
  }