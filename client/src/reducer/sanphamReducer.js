import * as Types from "../actions/Types";
const inittialState = {
  sanpham: [],
  sanphams:{}
};
export default (state = inittialState, action) => {
  switch (action.type) {
    case Types.THEM_SANPHAM:
      return {
        ...state,
        sanpham: [action.payload, ...state.sanpham]
      };
    case Types.HIENTHI_SANPHAM:
      return { ...state, sanpham: action.payload };
      case Types.HIENTHI_SANPHAMS:
      return { ...state, sanphams: action.payload };
    case Types.XOA_SANPHAM:
    return {
        ...state,
        sanpham:state.sanpham.filter(dm=>dm._id!==action.payload)
    }  
    case Types.HIENTHI_SANPHAMS:
    return{
      ...state,
      sanphams:action.payload
    }
    default:
      return state;
  }
};
