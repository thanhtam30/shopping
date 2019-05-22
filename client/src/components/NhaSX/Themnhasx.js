import React, { Component } from 'react';
import { Container, Row, Col , Button, Form, Label, Input, FormFeedback} from 'reactstrap';
import {connect} from 'react-redux';
import {ThemNhaSX} from '../../actions/nhasxAction';

import PropTypes from 'prop-types'
class Themnhasx extends Component {
    constructor(props) {
        super(props);
        this.state={
            TenNhaSX:'',
            errors:{}
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=e=>{
        e.preventDefault();
        const newNhaSx={
            TenNhaSX:this.state.TenNhaSX
        }
        this.props.ThemNhaSX(newNhaSx,this.props.history);
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
           <h1 >Thêm nhà sản xuất sản phẩm</h1>
            <br/>
            
           <Form onSubmit={this.onSubmit}>
           <Row>
           <Col  sm='6'>
                    <Label>Tên nhà sản xuất sản phẩm</Label>
                </Col>
                <Col  sm='6'>
                <Input
                            type="text"
                            name="TenNhaSX"
                            id="TenNhaSX"
                            placeholder="Tên nhà sản xuất sản phẩm..."
                            onChange={this.onChange}
                            invalid={errors.TenNhaSX ? true : false}
                        />
                         <FormFeedback>{errors.TenNhaSX ? errors.TenNhaSX : null}</FormFeedback>
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
Themnhasx.propTypes={
    ThemNhaSX:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
    return {
        errors: state.errors
    }
}
export default connect(mapStateToProps,{ThemNhaSX})(Themnhasx);