import React, { Component } from 'react';
import {connect} from 'react-redux'
import {HienThiCapNhat,CapnhatDM} from '../../actions/danhmucActions'
import isEmpty from 'is-empty';

import { Container, Row, Col , Button, Form, Label, Input, FormFeedback} from 'reactstrap';


class Capnhat extends Component {
    constructor(props) {
        super(props);
        this.state={
            TenDanhMuc:'',
           
            errors: {},
            
        }
    }
   
    onChange=e=>{
       
              this.setState({ [e.target.name]: e.target.value });
        
    }
    onSubmit=e=>{
        e.preventDefault();
     
        const {TenDanhMuc}=this.state;
            const danhmuc=({
                TenDanhMuc
            })
            
          this.props.CapnhatDM(this.props.match.params.id,danhmuc,this.props.history);
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
        if(nextProps.danhmuc.danhmuc){
            const danhmuc=nextProps.danhmuc.danhmuc;
          
          
            danhmuc.TenDanhMuc = !isEmpty(danhmuc.TenDanhMuc) ? danhmuc.TenDanhMuc : '';
           
            this.setState({
                TenDanhMuc:danhmuc.TenDanhMuc
            
               
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
                            name="TenDanhMuc"
                            id="TenDanhMuc"
                            value={this.state.TenDanhMuc}
                            onChange={this.onChange}
                            invalid={errors.TenDanhMuc ? true : false}
                        />
                         <FormFeedback>{errors.TenDanhMuc ? errors.TenDanhMuc : null}</FormFeedback>
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
        danhmuc:state.danhmuc
    }
}
export default connect(mapStateToProps,{HienThiCapNhat,CapnhatDM})(Capnhat);