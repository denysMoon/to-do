import { PLUS, MINUS, FETCH_DATA, POST, DELETE, EDIT_POST,
  SHOW_LOADER, HIDE_LOADER, SHOW_ALERT } from './types'
import Axios from 'axios'
import { linkServer } from '../utils'

export function plusAction() {
      return {
        type: PLUS
      }
    }

export const minusAction = () => {
      return {
        type: MINUS
      }
    }

export const fetchData = () => {
  return async(dispatch)=>{
    try{
      dispatch(showLoader())
      const result = await Axios.get(`${linkServer}/list`)
  
      dispatch({
        type: FETCH_DATA,
        payload: result.data
      })
  
      dispatch(hideLoader())
    } catch (err){
      dispatch(showAlert('Something going wrong'))
      dispatch(hideLoader())
    }
  }
}

export const postAction = (value) => {
  return async(dispatch)=>{
    const result = await Axios.post(`${linkServer}/list`, {
      body: value
    })

    dispatch({
      type: POST,
      payload: result.data
    })
  }
}

export const deleteAction = (value) => {
  return async(dispatch)=>{
    const result = await Axios.delete(`${linkServer}/list/${value}`)
    .catch(err=>console.log(err))

    dispatch({
      type: DELETE,
      payload: value
    })
  }
}

export const editPostAction = (value) =>{
  return {
    type: EDIT_POST,
    payload: value
  }
}

export const showLoader = () =>{
  return {
    type: SHOW_LOADER
  }
}

export const hideLoader = () =>{
  return {
    type: HIDE_LOADER
  }
}

export const showAlert = (value) =>{
  return {
    type: SHOW_ALERT,
    payload: value
  }
}
