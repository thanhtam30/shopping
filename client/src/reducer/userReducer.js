import isEmpty from 'is-empty';
import * as Types from '../actions/Types';
import _ from 'lodash';
const initialState={
    user:{},
    isAuthenticated: false
}
export default (state=initialState,action)=>{
    switch (action.type) {
      case Types.SET_CURRENT_USER:
      return{

        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
   
      
    
        default:
            return state
    }
}