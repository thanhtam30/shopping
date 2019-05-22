import React, { Component } from 'react';

    import PropTypes from 'prop-types'
    import Search from './Search';
    import { Link } from 'react-router-dom';
    import {logoutUser} from '../../actions/userActions'
    import {connect} from 'react-redux';
    

class Header extends Component {
  onLogoutuser(e){
    e.preventDefault();
    this.props.logoutUser();
  }
  
    render() {
      const {isAuthenticated, user}=this.props.user
      const {cart}=this.props.cart
   
      const menudangxuat=(
        <ul className="navbar-nav ml-auto">
                    
        <li className="nav-item">
          <Link className="nav-link" to="" onClick={this.onLogoutuser.bind(this)}>
            ({user.fullName})Đăng xuất 
          </Link>

        </li>
        
            <li className="nav-item">
              <Link className="nav-link" to="/Cart" >
              Cart({this.props.cart.cart.length})
              </Link>
            </li>
            
        
        </ul>
     
        
      );
      const menudangnhap= (
        
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
              <Link className="nav-link" to="/Cart" >
              Cart({this.props.cart.cart.length})
              </Link>
            </li>
            
        <li className="nav-item">
        
          <Link className="nav-link" to="/Dangky" >
            Đăng ký
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Dangnhap">
            Đăng nhập
          </Link>
        </li>
        </ul>
      
      );
                     
      {/* <a>
       <h5>{user.fullName}</h5>
        Logout
        <h5>{user.userType==='admin'?<li className="nav-item">
          <Link className="nav-link" to="/DanhSachSP">
            Admin
          </Link>
        </li>:''}</h5>
       
      </a>
       */}
    
    
      
        return (
         
              <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
        <ul className="navbar-nav mr-auto">
                  
        <li className="nav-item">
        <Link className="nav-link" to="/" ><i className="fas fa-home" ></i>Trang Chủ
            
            </Link>
        </li>
        
        </ul>
        <ul className="navbar-nav ml-auto">
        <Search/>  
        </ul>
        <ul>
            <li>
              <Link className='nav-link' to='/DanhSachThanhToan'>Danh sách thanh toán</Link>
            </li>
        </ul>
          <div className="collapse navbar-collapse" id="mobile-nav">
           
          {(isAuthenticated ) ? menudangxuat : menudangnhap}
          {(user.userType==='admin')?<Link to='/DanhSachSP'>Admin</Link>:''}
          
          </div>
        </div>
      </nav>
                
          
        );
    }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    user:state.user
  }
}
export default connect(mapStateToProps,{logoutUser})(Header);
