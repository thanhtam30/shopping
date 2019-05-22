import * as Types from './Types';
import axios from 'axios';
//Them danh muc
export const ThemSP=(data,history)=>dispatch=>{
    
    axios
      .post('/api/sanpham', data)
      .then(history.push('/DanhSachSP'))
      .catch(err =>
        dispatch({
          type: Types.GET_ERRORS,
          payload: err.response.data
        })
      );
}
//Hien thi danh muc
export const HienthiSP=()=>dispatch=>{
  axios.get('/api/sanpham')
  .then(res=>dispatch({
    type:Types.HIENTHI_SANPHAM,
    payload:res.data
  }))
  .catch(err=>dispatch({
    type:Types.HIENTHI_SANPHAM,
    payload:null
  }))
}
//xoa danh muc
export const XoaSP=(id)=>dispatch=>{
  
  axios.delete(`/api/sanpham/xoa/${id}`)
  .then(res=>dispatch({
    type:Types.XOA_SANPHAM,
    payload:id
  }))
  .catch(err=>dispatch({
    type:Types.GET_ERRORS,
    payload:err.response.data
  }))
}
//hien thi sanpham theo id
export const HienThiID = id => dispatch => {
  
  axios
    .get(`/api/sanpham/hienthiid/${id}`)
    .then(res =>
      dispatch({
        type: Types.HIENTHI_SANPHAMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: Types.HIENTHI_SANPHAMS,
        payload: null
      })
    );
};
//hien thi danh muc cap nhat theo id
export const HienThiCapNhatSP = id => dispatch => {
  
  axios
    .get(`/api/sanpham/hienthicapnhat/${id}`)
    .then(res =>
      dispatch({
        type: Types.HIENTHI_SANPHAM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: Types.HIENTHI_SANPHAM,
        payload: null
      })
    );
};
//Cap nhat danh muc theo id
export const CapNhatSP=(id,data,history)=>dispatch=>{
  axios.post(`/api/sanpham/capnhat/${id}`,data)
  .then(history.push('/DanhSachSP'))
  .catch(err=>dispatch({
    type:Types.GET_ERRORS,
    payload:err.response.data,
  }))
}
//Danh gia san pham  theo id
export const BinhLuanSP=(id,data)=>dispatch=>{
  axios.post(`/api/sanpham/Binhluan/${id}`,data)
  .then(res=>dispatch(HienThiID()))
  .catch(err=>dispatch({
    type:Types.GET_ERRORS,
    payload:err.response.data,
  }))
}
//danh gia sao san pham
export const DanhGiaSP=(id,data)=>dispatch=>{
  axios.post(`/api/sanpham/DanhGia/${id}`,data)
  .then(res=>dispatch(HienThiID()))
  .catch(err=>dispatch({
    type:Types.GET_ERRORS,
    payload:err.response.data
  }))
}