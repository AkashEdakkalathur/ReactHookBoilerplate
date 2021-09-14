import { SET_COUNTER } from '../constants/actionConstant'
const initialState = ""
  
  const  counterReducer = (state = initialState, action)=> {
    switch (action.type) {
        
      case SET_COUNTER:
        return action.payload
      default:
        return state
    }
  }
  export default counterReducer;