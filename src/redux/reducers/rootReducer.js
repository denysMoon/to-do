import { combineReducers } from 'redux'
import { plusReducer } from './plusReducer'
import { fetchReducer } from './fetchReducer'
import { editPostReducer } from './editPostReducer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
    plus: plusReducer,
    fetch: fetchReducer,
    editPost: editPostReducer,
    app: appReducer
})