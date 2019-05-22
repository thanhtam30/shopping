import React, { Component } from 'react';
import { Container, Row, Col , Button, Form, Label, Input, FormFeedback} from 'reactstrap';
import {connect} from 'react-redux';
import {ThemDM} from '../../actions/danhmucActions';

import PropTypes from 'prop-types'
class Them extends Component {
    constructor(props) {
        super(props);
        this.state={
            TenDanhMuc:'',
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
        const newDM={
            TenDanhMuc:this.state.TenDanhMuc
        }
        this.props.ThemDM(newDM,this.props.history);
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
           <h1 >Thêm Danh mục sản phẩm</h1>
            <br/>
            
           <Form onSubmit={this.onSubmit}>
           <Row>
           <Col  sm='6'>
                    <Label>Tên danh mục sản phẩm</Label>
                </Col>
                <Col  sm='6'>
                <Input
                            type="text"
                            name="TenDanhMuc"
                            id="TenDanhMuc"
                            placeholder="Tên danh mục sản phẩm..."
                            onChange={this.onChange}
                            invalid={errors.TenDanhMuc ? true : false}
                        />
                         <FormFeedback>{errors.TenDanhMuc ? errors.TenDanhMuc : null}</FormFeedback>
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
Them.propTypes={
    ThemDM:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
    return {
        errors: state.errors
    }
}
export default connect(mapStateToProps,{ThemDM})(Them);