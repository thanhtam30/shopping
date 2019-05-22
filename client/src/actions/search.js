import * as Types from './Types'
export function SearchDanhMuc(danhmuc) {
  return {
    type:Types.SEARCH_DANHMUC,
    payload:{danhmuc}
  };
}

export function SearchSanpham(sanpham) {
  return {
    type: Types.SEARCH_SANPHAM,
    payload:{sanpham}
  };
}
// export const searchTask = (keyword) => {
//   return {
//       type : Types.SEARCH,
//       keyword // keyword : keyword
//   }
// }