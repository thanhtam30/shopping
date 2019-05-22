import React, { Component } from 'react';
import {connect} from 'react-redux'
class Chitietbinhluan extends Component {
    render() {
      
        let sanpham =  (this.props && this.props.BinhLuan &&this.props.BinhLuan.length) > 0 ?this.props.BinhLuan.map((exp,index) => (   
           
            <tr key={index}>
                    <td>{exp.name}</td>
                <td>{exp.BinhLuan}</td>
              </tr>
            )):<tr></tr>
       

        return (
          <div>
            <h4 className="mb-4">Nhận xét</h4>
            <table >
              <thead>
                <tr>
                 
                  <th>Tên</th>
                  <th>Bình luận</th>
                  
                </tr>
                {sanpham}
              </thead>
            </table>
          </div>
        );
      }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps,{})(Chitietbinhluan);