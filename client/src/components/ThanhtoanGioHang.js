import React, { Component } from 'react';
import { Container, Row, Col , Button, Form, Label, Input, FormFeedback} from 'reactstrap';
import {connect} from 'react-redux';
import {thanhtoangiohang} from '../actions/thanhtoanActions';
import {clearCart} from '../actions/cartActions'
import PropTypes from 'prop-types'
class ThanhtoanGiohang extends Component {
    constructor(props) {
        super(props);
        this.state={
            DiaChi:''

        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=e=>{
        e.preventDefault();
        const newThanhToan={
            DiaChi:this.state.DiaChi
        }
        
        
        this.props.thanhtoangiohang(newThanhToan,this.props.history);
        this.props.clearCart();
        
    }
    
   
    render() {
        // const { errors } = this.state;
        
        return (
          <Container>
           <h1 >Thanh Toán</h1>
            <br/>
            
           <Form onSubmit={this.onSubmit}>
           <Row>
           <Col  sm='6'>
                    <Label>Địa chỉ thanh toán</Label>
                </Col>
                <Col  sm='6'>
                <Input
                            type="text"
                            name="DiaChi"
                            id="DiaChi"
                            placeholder="Địa chỉ thanh toán.."
                            onChange={this.onChange}
                            // invalid={errors.DiaChi ? true : false}
                        />
                         {/* <FormFeedback>{errors.DiaChi ? errors.DiaChi : null}</FormFeedback> */}
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
        user: state.user,
        cart:state.cart
    }
}

export default connect(mapStateToProps,{thanhtoangiohang,clearCart})(ThanhtoanGiohang);