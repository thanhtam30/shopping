import axios from 'axios'

const setHeaders = (token, fingerprint) => {
    console.log('setheaders')
	console.log("TCL: setHeaders -> token", token)
    
    if(token && fingerprint){
        axios.defaults.headers.common['Authorization'] = token
        axios.defaults.headers.common['fingerprint'] = fingerprint
    } else {
        delete axios.defaults.headers.common['Authorization'];
        delete axios.defaults.headers.common['fingerprint'];
    }
}

export default setHeaders;


// const setAuthToken = (token) => {
//     if (token) {
//         axios.defaults.headers.common['Authorization'] = token; // thêm token vào header
//     }
//     else {
//         delete axios.defaults.headers.common['Authorization']; // xóa token khi log out
//     }
// }


// export default setAuthToken;