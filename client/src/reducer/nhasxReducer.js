import * as Types from "../actions/Types";
const inittialState = {
  nhasx: []
};
export default (state = inittialState, action) => {
  switch (action.type) {
    case Types.THEM_NHASX:
      return {
        ...state,
        nhasx: [action.payload, ...state.nhasx]
      };
    case Types.HIENTHI_NHASX:
      return { ...state, nhasx: action.payload};
    case Types.XOA_NHASX:
    return {
        ...state,
        nhasx:state.nhasx.filter(nhasx=>nhasx._id!==action.payload)
    }  
   

    default:
      return state;
  }
};
