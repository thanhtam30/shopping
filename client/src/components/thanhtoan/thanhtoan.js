import React, { Component } from 'react';
import {connect} from 'react-redux';
import {hienthithanhtoan} from '../../actions/thanhtoanActions';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import Moment from 'react-moment';
    import moment from 'moment';
    import {Link} from 'react-router-dom'
import {Table} from 'reactstrap'
class thanhtoan extends Component {
    componentDidMount(){
        this.props.hienthithanhtoan();

    }
    render() {
        const {thanhtoans}=this.props.thanhtoan
        const thanhtoana=(this.props && this.props.thanhtoan.thanhtoans && this.props.thanhtoan.thanhtoans.length) ?this.props.thanhtoan.thanhtoans.map((tt,index)=>(
            <tr key={index}>
            <th>{index+1}</th>
            <th>{tt.DiaChi}</th>
            <th>{tt.user.fullName}</th>
            <th>{tt.user.phone}</th>
            <th><Moment format='DD/MM/YYYY'>{tt.Ngaymuahang}</Moment></th>
            <th>
            {(tt.cart && tt.cart.length>0)?(tt.cart.map((cart,index)=>{
                return  <Card key={index}>
    
          <CardText>{cart.TenSanPham}</CardText>
          
         
      </Card>
              
            })):<Card></Card>}
            </th>
            <th>
            <Link to={`/ChiTietGioHang/${tt._id}`}>Xem chi tiet</Link>
            </th>
        </tr>


        )):<tr></tr>
        
        return (
            <div>
               <Table>
                   <thead>
                       <tr>
                           <th>STT</th>
                           <th>Dia chi</th>
                           <th>Tên khách hàng</th>
                           <th>Số điện thoại</th>
                           <th>Ngày đặt hàng</th>
                           <th>Ten san pham</th>
                       </tr>
                   </thead>
                   <tbody>
                      {thanhtoana}
                   </tbody>
               </Table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user:state.user,
        cart:state.cart,
        thanhtoan: state.thanhtoan
    }
}
export default connect(mapStateToProps,{hienthithanhtoan})(thanhtoan);