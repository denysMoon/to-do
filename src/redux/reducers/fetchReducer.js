import { FETCH_DATA, POST, DELETE } from '../types'

const initialState = {
  fetchedPosts: []
}

export const fetchReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_DATA:
        return { ...state, fetchedPosts: action.payload };
      case POST:
        return {...state, fetchedPosts: state.fetchedPosts.concat([action.payload])}
      case DELETE:
        return {...state, fetchedPosts: state.fetchedPosts.filter(item=>item._id !== action.payload)}
      default: return state
    }
  }

