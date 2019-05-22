import * as Types from '../actions/Types';
const inittialState={};
export default (state=inittialState,action)=>{
switch (action.type) {
    case Types.GET_ERRORS:
        
      return action.payload;

    default:
      return {...state}
}
}