import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, Row, Col} from 'reactstrap';
import {connect} from 'react-redux'
import {dangnhap} from '../../actions/userActions';

class Dangnhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.dangnhap(this.state)
    }
    componentWillReceiveProps(nexprop){
        if (nexprop.user.isAuthenticated) {
            this.props.history.push('/');
          }
      
        if(nexprop.errors){
            this.setState({
                errors:nexprop.errors
            })
        }
    }
    render() {
        const { errors } = this.state;

        return (
            <div className="container text-left">
                <h1>Đăng nhập</h1>
                <Form onSubmit={this.onSubmit} >
                <Row>
           <Col  sm='6'>
                    <Label>Email </Label>
                </Col>
                <Col  sm='6'>
                <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter email..."
                            onChange={this.onChange}
                            invalid={errors.nouser||errors.email ? true : false}
                        />
                        <FormFeedback>{errors.nouser||errors.email ? errors.nouser||errors.email : null}</FormFeedback>
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
                            
                            onChange={this.onChange}
                            invalid={errors.nopass||errors.password ? true : false}
                        />
                        <FormFeedback>{errors.nopass||errors.password ? errors.nopass||errors.password : null}</FormFeedback>
                </Col>
           </Row>
           <br/>  
                    <Button>Submit</Button>

                </Form>
                    
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        user:state.user
    }
}
export default connect(mapStateToProps, {dangnhap})(Dangnhap);