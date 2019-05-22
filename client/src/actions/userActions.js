import * as Types from './Types';
import jwtDecode from 'jwt-decode';
import calcFingerprint from '../utils/calcFingerprint';
import setHeaders from '../utils/setHeaders';
const axios=require('axios');


export const dangky=(data,history)=>dispatch=>{
    
  axios
    .post('/api/user/dangky', data)
    .then(res=>history.push('/Dangnhap'))
    .catch(err =>
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data
      })
    );
}
export const dangnhap = (data) => {
  return (dispatch) => {
      calcFingerprint(fingerprint => {
          axios
              .post('/api/user/dangnhap', { ...data, fingerprint })
              .then(res => {
                 

                  // lay token
                  const token = res.data.token;

                  // luu token tren localStorag
                  localStorage.setItem('token', token)
                  localStorage.setItem('fingerprint', fingerprint)

                  // decode token
                  const decoded = jwtDecode(token)

                  setHeaders(token, fingerprint)
                  // luu decoded vao redux
                  dispatch(setCurrentUser(decoded))
              })
              .catch(err => dispatch({
                type: Types.GET_ERRORS,
                payload: err.response.data
              }))
      })
  }
}
export const setCurrentUser = (user) => {
  return ({
      type: Types.SET_CURRENT_USER,
      payload:user
  })
}
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setHeaders(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};