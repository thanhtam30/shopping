import * as Types from '../actions/Types'
const initialState = {
  sanpham: '',
  danhmuc: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.SEARCH_SANPHAM:
      return { sanpham:action.payload.sanpham, danhmuc: state.danhmuc };
    case Types.SEARCH_DANHMUC:
      return { sanpham:state.sanpham,danhmuc:action.payload.danhmuc};
    default:
      return state;
  }
}
// var initialState = '';
// export default function (state = initialState, action) {
//     switch(action.type){
//         case Types.SEARCH:
//             return action.keyword;
//         default:
//             return state;
//     }
// };

