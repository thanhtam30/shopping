import * as Types from './Types'
import axios from 'axios';
//Thanh toan
export const thanhtoangiohang=(data,history)=>dispatch=>{
    
    axios
      .post('/api/cart/thanhtoan', data)
      .then(res=>history.push('/'))
      .catch(err =>
        dispatch({
          type: Types.THANHTOAN,
          payload:null
        })
      );
}
export const hienthithanhtoan=()=>dispatch=>{
  axios.get('/api/cart/thanhtoan')
  .then(res=>dispatch({
    type:Types.HIENTHITHANHTOAN,
    payload:res.data
  }))
  .catch(err=>dispatch({
    type:Types.HIENTHITHANHTOAN,
    payload:null
  }))

}
export const xemthanhtoanid=(id)=>dispatch=>{
axios.get(`/api/cart/xemthanhtoan/${id}`)
.then(res=>dispatch({
  type:Types.HIENTHITHANHTOAN,
  payload:res.data
}))
.catch(err=>dispatch({
  type:Types.HIENTHITHANHTOAN,
  payload:null
}))
}