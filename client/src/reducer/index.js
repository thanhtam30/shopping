import {combineReducers} from 'redux';
import errors from './errorsReducer';
import danhmuc from './danhmucReducer';
import sanpham from './sanphamReducer'
import nhasx from './nhasxReducer';
import search from './searchReducer';
import cart from './cartReducers';
import user from './userReducer';
import thanhtoan from './thanhtoanReducer';
export default combineReducers({
errors:errors,
danhmuc:danhmuc,
sanpham:sanpham,
nhasx:nhasx,
search:search,
cart:cart,
user:user,
thanhtoan:thanhtoan
})