import React, { Component } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {XoaSP} from '../../actions/sanphamActions';
import {Link} from 'react-router-dom';


class Danhsachcon extends Component {
 
  
  OnDeleteSP(id){
    this.props.XoaSP(id);
  }
    render() {
      
       
    
        
        let sanpham =  (this.props && this.props.sanpham &&this.props.sanpham.length) > 0 ?this.props.sanpham.map((exp,index) => (   
           
           <tr key={index}>
                   <td>{index+1}</td>
               <td>{exp.TenSanPham}</td>
               
               <td> {exp.HinhAnh.map((item, index) => (
              <img key={index} src={item} width='50px' height='50px'/>
            ))}</td>
               <td>
               <Link className='btn btn-danger' onClick={this.OnDeleteSP.bind(this,exp._id)}>Xóa</Link>
            
               </td>
               <td>
            
               <Link className='btn btn-danger' to={`/CapNhatSP/${exp._id}`}>Cập Nhật</Link>
               </td>
               
             </tr>
           )):<tr></tr>
            
        return (
            <div>
             <Link className='btn btn-danger' to='/ThemSP'>Thêm Sản Phẩm</Link>
            <h1>Danh mục sản phẩm </h1>
                <Table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Sản phẩm</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        
         
      {sanpham}
        </tbody>
      </Table>  
            </div>
        );
    }
}
Danhsachcon.propTypes={
  XoaSP:PropTypes.func.isRequired
}
export default connect(null,{XoaSP})(Danhsachcon);