import React, { Component } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {XoaNhaSX} from '../../actions/nhasxAction';
import {Link} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Danhsachconnhasx extends Component {
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
  onDeleteNhaSX(id){
    this.props.XoaNhaSX(id);
  }
    render() {
  
        
        let nhasx =  (this.props && this.props.nhasx &&this.props.nhasx.length) > 0 ?this.props.nhasx.map((exp,index) => (   
           
           <tr key={index}>
                   <td>{index+1}</td>
               <td>{exp.TenNhaSX}</td>
               <td>
               <Button color="danger" onClick={this.toggle}>Xoa</Button>
            
               </td>
               <td>
               <Link className='btn btn-danger' to={`/CapNhatNhaSX/${exp._id}`}>Cập Nhật</Link>
                
               
                
               </td>
              <td>
              <Link color='btn btn-danger' onClick={this.onDeleteNhaSX.bind(this,exp._id)}>Xóa</Link>
              </td>
             </tr>
           )):<tr></tr>
            
        return (
            <div>
            <Link className='btn btn-danger' to='/ThemNhaSX'>Thêm Nhà Sản Xuất</Link>
            <h1>Nhà sản xuất sản phẩm </h1>
                <Table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Nhà Sản Xuất</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        
         
      {nhasx}
        </tbody>
      </Table>  
            </div>
        );
    }
}
Danhsachconnhasx.propTypes={
  XoaNhaSX:PropTypes.func.isRequired
}
export default connect(null,{XoaNhaSX})(Danhsachconnhasx);