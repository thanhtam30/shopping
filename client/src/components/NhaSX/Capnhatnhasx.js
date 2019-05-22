import React, { Component } from 'react';
import {connect} from 'react-redux'
import {HienThiCapNhat,CapNhatNhaSX} from '../../actions/nhasxAction'
import isEmpty from 'is-empty';

import { Container, Row, Col , Button, Form, Label, Input, FormFeedback} from 'reactstrap';


class Capnhatnhasx extends Component {
    constructor(props) {
        super(props);
        this.state={
            TenNhaSX:'',
           
            errors: {},
            
        }
    }
   
    onChange=e=>{
       
              this.setState({ [e.target.name]: e.target.value });
        
    }
    onSubmit=e=>{
        e.preventDefault();
     
        const {TenNhaSX}=this.state;
            const nhasx=({
                TenNhaSX
            })
            
          this.props.CapNhatNhaSX(this.props.match.params.id,nhasx,this.props.history);
    }
    componentDidMount(){
        if (this.props.match.params.id) {
            this.props.HienThiCapNhat(this.props.match.params.id);
          }
        

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
          }
        if(nextProps.nhasx.nhasx){
            const nhasx=nextProps.nhasx.nhasx;
          
          
            nhasx.TenNhaSX = !isEmpty(nhasx.TenNhaSX) ? nhasx.TenNhaSX : '';
           
            this.setState({
                TenNhaSX:nhasx.TenNhaSX
            
               
            })
        }
      }
     
    render() {
        const { errors } = this.state;
     
        return (
            
          <div>
               <Container>
           <h1 >Cập nhật danh mục sản phẩm</h1>
            <br/>
            
           <Form onSubmit={this.onSubmit}>
           <Row>
           <Col  sm='6'>
                    <Label>Tên danh mục sản phẩm</Label>
                </Col>
                <Col  sm='6'>
                <Input
                            type="text"
                            name="TenNhaSX"
                            id="TenNhaSX"
                            value={this.state.TenNhaSX}
                            onChange={this.onChange}
                            invalid={errors.TenNhaSX ? true : false}
                        />
                         <FormFeedback>{errors.TenNhaSX ? errors.TenNhaSX : null}</FormFeedback>
                </Col>
           </Row>
           <br/>
           <Row>
           <Button color="primary" size="lg" block >Submit</Button>
               
           </Row>
           </Form>
           
          </Container>
          </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        nhasx:state.nhasx
    }
}
export default connect(mapStateToProps,{HienThiCapNhat,CapNhatNhaSX})(Capnhatnhasx);