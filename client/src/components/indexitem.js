import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {addToCart,updateCart} from '../actions/cartActions'
class Danhsachcon extends Component {
   
  handleCart(){
    const sanpham = [...this.props.cart, {
      _id:this.props.sanpham._id,
      TenSanPham:this.props.sanpham.TenSanPham,
     
      HinhAnh: this.props.sanpham.HinhAnh,
      Gia:this.props.sanpham.Gia,
      quantity:1
    }]
    
     // CHECK IF CART IS EMPTY
     if(this.props.cart.length > 0) {
      // CART IS NOT EMPTY
      let _id = this.props.sanpham._id;

      let cartIndex = this.props.cart.findIndex(function(cart){
        return cart._id === _id;
      })
      // IF RETURNS -1 THERE ARE NO ITEMS WITH SAME ID
      if (cartIndex === -1){
        this.props.addToCart(sanpham);
      } else {
        // WE NEED TO UPDATE QUANTITY
        this.props.updateCart(_id, 1, this.props.cart);
      }

    } else {
      // CART IS EMPTY
      this.props.addToCart(sanpham);
    }

  }
 render() {
      
       
    
     
        return (
            <div  >
            
            <div
                
                >
                <img width='250px' height='200px'
                    src={this.props.sanpham.HinhAnh[0]}
                 
                />
            </div>
            <div >
                <span >
                    {this.props.sanpham.TenSanPham}
                </span>
                <p>{this.props.sanpham.Gia}</p>
                <Link className='btn btn-danger' to={`/Chitiet/${this.props.sanpham._id}`}>Chi tiet</Link>
            </div>
                <div>
                <button onClick={this.handleCart.bind(this)} className='btn btn-default'>Buy now</button>
                </div>
          

           
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}
export default connect(mapStateToProps,{addToCart,updateCart})(Danhsachcon);