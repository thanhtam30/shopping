import React, { Component } from 'react';
import {connect} from 'react-redux';
import {xemthanhtoanid} from '../../actions/thanhtoanActions'
class ChiTietThanhToan extends Component {
    componentDidMount(){
        if(this.props.match.params.id){
                this.props.xemthanhtoanid(this.props.match.params.id)
        }
    }
    render() {
        const {thanhtoans}=this.props.thanhtoan
        
        
        return (
            <div>
                    <div className='row'>
                        <div className='col md-4'>Tên khách hàng</div>
                        <div className='col md-8'>{thanhtoans.user ? thanhtoans.user.fullName :'Khong co tai xe'}</div>
                    </div>   
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        thanhtoan: state.thanhtoan,
        user:state.user,
        cart:state.cart
    }
}
export default connect(mapStateToProps,{xemthanhtoanid})(ChiTietThanhToan);