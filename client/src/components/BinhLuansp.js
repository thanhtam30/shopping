import React, { Component } from 'react';
import { Container, Row, Col , Button, Form, Label, Input, FormFeedback} from 'reactstrap';
import {connect} from 'react-redux';
import {BinhLuanSP} from '../actions/sanphamActions';

import PropTypes from 'prop-types';


class binhluan extends Component {
    constructor(props) {
        super(props);
        this.state={
            BinhLuan:'',
            errors:{}
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const { id } = this.props;
        
        const { user } = this.props.user;
       const newBinhluan={
        BinhLuan:this.state.BinhLuan,
        name:user.fullName,
        user:user._id
       }
        this.props.BinhLuanSP(id,newBinhluan);
        this.setState({ BinhLuan: '' });
    }
    
    componentWillReceiveProps=(nextProps)=>{
        this.setState({
            errors:nextProps.errors
        })
    }
  
    render() {
        
   
         
        const { errors } = this.state;
     
        return (
          <Container>
           <h1 >Nhận xét sản phẩm</h1>
            <br/>
            
           <Form onSubmit={this.onSubmit}>
           <Row>
           <Col  sm='6'>
                    <Label>Hãy để lại lời bình luận của bạn</Label>
                </Col>
                <Col  sm='6'>
                <Input
                            type="text"
                            name="BinhLuan"
                            id="BinhLuan"
                            placeholder="Bình luận sản phẩm"
                            onChange={this.onChange}
                           // invalid={errors.TenDanhMuc ? true : false}
                        />
                         {/* <FormFeedback>{errors.TenDanhMuc ? errors.TenDanhMuc : null}</FormFeedback> */}
                </Col>
           </Row>
           <br/>
          
           <Row>
           
           <Button color="primary" size="lg" block>Submit</Button>
               
           </Row>
           </Form>
           
          </Container>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        user:state.user,
        sanpham:state.sanpham
    }
}
export default connect(mapStateToProps,{BinhLuanSP})(binhluan);