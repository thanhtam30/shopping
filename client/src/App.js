import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import setHeaders from './utils/setHeaders'
// import components
import Header from './components/Header/Header'
import ThemDM from './components/Danhmuc/Them';
import CapNhatDM from './components/Danhmuc/Capnhat';
import DanhSachDM from './components/Danhmuc/Danhsach';
import ThemSP from './components/SP/Themsp';
import DanhSachSP from './components/SP/Danhsachsp'
import CapNhatSP from './components/NhaSX/Capnhatsp'
import ThemNhaSX from './components/NhaSX/Themnhasx';
import CapNhatNhaSX from './components/NhaSX/Capnhatnhasx';
import DanhSachNhaSX from './components/NhaSX/Danhsachnhasx';
import Dangky from './components/user/Dangky';
import Dangnhap from './components/user/Dangnhap';
import Errors from './components/Errors';
import Cart from './components/cart';
import Thanhtoan from './components/ThanhtoanGioHang';
import Index from './components/index';
import ChiTiet from './components/chitietsanpham';
import DanhSachThanhToan from './components/thanhtoan/thanhtoan';
import ChiTietGioHang from './components/thanhtoan/ChiTietThanhToan';
import {Provider} from 'react-redux';
import store from './store';
import calcFingerprint from './utils/calcFingerprint';


import 'bootstrap/dist/css/bootstrap.min.css';
import { xemthanhtoanid } from "./actions/thanhtoanActions";

const fingerprint = localStorage.getItem('fingerprint')
const token = localStorage.getItem('token');
if(fingerprint && token){
    setHeaders(fingerprint, token)
}

class App extends React.Component {
  componentDidMount() {
    const fingerprint = localStorage.getItem('fingerprint')
    const token = localStorage.getItem('token');
    if (fingerprint && token) {
      setHeaders(fingerprint, token)
    }

  }

  render() {
    return (
      <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        
          <Route exact path='/' component={Index} />
      <Route exact  path='/CapNhatSP/:id' component={CapNhatSP}/>
      <Route exact path='/ThemSP' component={ThemSP} />
      <Route exact path='/DanhSachSP' component={DanhSachSP}></Route>
      <Route exact path='/ThemDanhMuc' component={ThemDM} />
      <Route exact path='/DanhSachDM' component={DanhSachDM} />
      <Route exact path='/CapNhatDM/:id' component={CapNhatDM} />
      <Route exact path='/ThemNhaSX' component={ThemNhaSX} />
      <Route exact path='/DanhSachNhaSX' component={DanhSachNhaSX} />
      <Route exact path='/CapNhatNhaSX/:id' component={CapNhatNhaSX} />
      <Route  exact path='/Dangky' component={Dangky} />
      <Route exact path='/Cart' component={Cart}></Route>
      <Route  exact path='/Dangnhap' component={Dangnhap} />
       <Route exact path='/Thanhtoan' component={Thanhtoan}></Route> 
       <Route exact path='/DanhSachThanhToan' component={DanhSachThanhToan}></Route> 
       <Route exact path='/Chitiet/:id' component={ChiTiet}></Route> 
       <Route exact path='/ChiTietGioHang/:id' component={ChiTietGioHang}></Route>   
      </div>
      </Router>
       
    </Provider>
    );

  }
}

export default App;
