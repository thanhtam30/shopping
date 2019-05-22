import * as Types from './Types';
import axios from 'axios';
//Them danh muc
export const ThemDM=(data,history)=>dispatch=>{
    
    axios
      .post('/api/danhmuc/them', data)
      .then(history.push('/DanhSachDM'))
      .catch(err =>
        dispatch({
          type: Types.GET_ERRORS,
          payload: err.response.data
        })
      );
}
//Hien thi danh muc
export const HienthiDM=()=>dispatch=>{
  axios.get('/api/danhmuc/hienthi')
  .then(res=>dispatch({
    type:Types.HIENTHI_DANHMUC,
    payload:res.data
  }))
  .catch(err=>dispatch({
    type:Types.HIENTHI_DANHMUC,
    payload:null
  }))
}
//xoa danh muc
export const XoaDM=(id)=>dispatch=>{
  
  axios.delete(`/api/danhmuc/xoa/${id}`)
  .then(res=>dispatch({
    type:Types.XOA_DANHMUC,
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
    .get(`/api/danhmuc/hienthicapnhat/${id}`)
    .then(res =>
      dispatch({
        type: Types.HIENTHI_DANHMUC,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: Types.HIENTHI_DANHMUC,
        payload: null
      })
    );
};
//Cap nhat danh muc theo id
export const CapnhatDM=(id,data,history)=>dispatch=>{
  axios.post(`/api/danhmuc/capnhat/${id}`,data)
  .then(history.push('/DanhSachDM'))
  .catch(err=>dispatch({
    type:Types.GET_ERRORS,
    payload:err.response.data,
  }))
}