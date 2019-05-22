import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {dangky} from '../../actions/userActions';
import { Container, Row, Col , Button, Form, Label, Input, FormFeedback} from 'reactstrap';
class Dangky extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            fullName:'',
            phone:'', 
            errors: {}
        }
    
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    onSubmit=e=>{
        e.preventDefault();
        const newUser={
            email:this.state.email,
            password:this.state.password,
            fullName:this.state.fullName,
            phone:this.state.phone
        }
        
        this.props.dangky(newUser,this.props.history)
        
        
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
    render() {
        const {errors}=this.state
        return (
            <div className='SignUp'>
                <div className='container'>
                    <div className='col-md-8 m-auto'>
                    <h1>Đăng ký</h1>
                    <br/>
                    <Form onSubmit={this.onSubmit}>
           <Row>
           <Col  sm='6'>
                    <Label>Tên </Label>
                </Col>
                <Col  sm='6'>
                <Input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Tên nhà sản xuất sản phẩm..."
                            onChange={this.onChange}
                            invalid={errors.fullName ? true : false}
                        />
                         <FormFeedback>{errors.fullName ? errors.fullName : null}</FormFeedback>
                </Col>
           </Row>
           <br/>
           <Row>
           <Col  sm='6'>
                    <Label>Email </Label>
                </Col>
                <Col  sm='6'>
                <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Tên nhà sản xuất sản phẩm..."
                            onChange={this.onChange}
                            invalid={errors.email ||errors.noemail ? true : false}
                        />
                         <FormFeedback>{errors.email ||errors.noemail ? errors.email||errors.noemail : null}</FormFeedback>
                </Col>
           </Row>
           <br/>
           <Row>
           <Col  sm='6'>
                    <Label>Mật khẩu </Label>
                </Col>
                <Col  sm='6'>
                <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Tên nhà sản xuất sản phẩm..."
                            onChange={this.onChange}
                            // invalid={errors.password ? true : false}
                        />
                         {/* <FormFeedback>{errors.password ? errors.password : null}</FormFeedback> */}
                </Col>
           </Row>
           <br/>
           <Row>
           <Col  sm='6'>
                    <Label> Số điện thoại</Label>
                </Col>
                <Col  sm='6'>
                <Input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Tên nhà sản xuất sản phẩm..."
                            onChange={this.onChange}
                            invalid={errors.phone ||errors.nophone ? true : false}
                        />
                         <FormFeedback>{errors.phone ||errors.nophone ? errors.phone ||errors.nophone : null}</FormFeedback>
                </Col>
           </Row>
           <br/>
           <Row>
           <Button color="primary" size="lg" block>Submit</Button>
               
           </Row>
           </Form>
           
                           
                           
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        
    }
}
export default connect(mapStateToProps,{dangky})(Dangky);