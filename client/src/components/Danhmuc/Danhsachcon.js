import React, { Component } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {XoaDM} from '../../actions/danhmucActions';
import {Link} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Danhsachcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false     
    }
    this.toggle = this.toggle.bind(this);

  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  OnDeleteDM(id){
    this.props.XoaDM(id);
  }
    render() {
  
        
        let danhmuc =  (this.props && this.props.danhmuc &&this.props.danhmuc.length) > 0 ?this.props.danhmuc.map((exp,index) => (   
           
           <tr key={index}>
                   <td>{index+1}</td>
               <td>{exp.TenDanhMuc}</td>
               <td>
               <Link color='btn btn-danger' onClick={this.OnDeleteDM.bind(this,exp._id)}>Xóa</Link>
            
               </td>
               <td>
               <Link className='btn btn-danger' to={`/CapNhatDM/${exp._id}`}>Cập Nhật</Link>
                
               
                
               </td>
              
             </tr>
           )):<tr></tr>
            
        return (
            <div>
              <Link color='btn btn-danger' to='/ThemDanhMuc'>Thêm Danh Mục</Link>
            <h1>Danh mục sản phẩm </h1>
                <Table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Danh Mục</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        
         
      {danhmuc}
        </tbody>
      </Table>  
            </div>
        );
    }
}
Danhsachcon.propTypes={
  XoaDM:PropTypes.func.isRequired
}
export default connect(null,{XoaDM})(Danhsachcon);