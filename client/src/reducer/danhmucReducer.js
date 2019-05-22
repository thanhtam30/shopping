import * as Types from "../actions/Types";
const inittialState = {
  danhmuc: []
};
export default (state = inittialState, action) => {
  switch (action.type) {
    case Types.THEM_DANHMUC:
      return {
        ...state,
        danhmuc: [action.payload, ...state.danhmuc]
      };
    case Types.HIENTHI_DANHMUC:
      return { ...state, danhmuc: action.payload, loading: false };
    case Types.XOA_DANHMUC:
    return {
        ...state,
        danhmuc:state.danhmuc.filter(dm=>dm._id!==action.payload)
    }  
   

    default:
      return state;
  }
};
