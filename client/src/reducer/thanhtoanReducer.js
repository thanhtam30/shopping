import * as Types from "../actions/Types";
const inittialState = {
  thanhtoan: [],
  thanhtoans:{}
};
export default (state = inittialState, action) => {
  switch (action.type) {
    case Types.THANHTOAN:
      return {
        ...state,
        thanhtoan: [action.payload, ...state.thanhtoan]
      };
      case Types.HIENTHITHANHTOAN:
   return {...state,thanhtoans:action.payload};

    default:
      return state;
  }
};
