import * as Types from './Types';
import axios from 'axios';
//Them danh muc
export const ThemNhaSX=(data,history)=>dispatch=>{
    
    axios
      .post('/api/nhasx/them', data)
      .then(history.push('/DanhSachNhaSX'))
      .catch(err =>
        dispatch({
          type: Types.GET_ERRORS,
          payload: err.response.data
        })
      );
}
//Hien thi danh muc
export const HienThiNhaSX=()=>dispatch=>{
  axios.get('/api/nhasx/hienthi')
  .then(res=>dispatch({
    type:Types.HIENTHI_NHASX,
    payload:res.data
  }))
  .catch(err=>dispatch({
    type:Types.HIENTHI_NHASX,
    payload:null
  }))
}
//xoa danh muc
export const XoaNhaSX=(id)=>dispatch=>{
  
  axios.delete(`/api/nhasx/xoa/${id}`)
  .then(res=>dispatch({
    type:Types.XOA_NHASX,
    payload:id
  }))
  .catch(err=>dispatch({
    type:Types.GET_ERRORS,
    payload:err.response.data
  }))
}
//hien thi danh muc cap nhat theo id
export const HienThiCapNhat = id => dispatch => {
  
  axios
    .get(`/api/nhasx/hienthicapnhat/${id}`)
    .then(res =>
      dispatch({
        type: Types.HIENTHI_NHASX,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: Types.HIENTHI_NHASX,
        payload: null
      })
    );
};
//Cap nhat danh muc theo id
export const CapNhatNhaSX=(id,data,history)=>dispatch=>{
  axios.post(`/api/nhasx/capnhat/${id}`,data)
  .then(history.push('/DanhSachNhaSX'))
  .catch(err=>dispatch({
    type:Types.GET_ERRORS,
    payload:err.response.data,
  }))
}