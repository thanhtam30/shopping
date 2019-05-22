import React, { Component } from 'react';
import { Container, Row, Col , Button, Form, Label, Input, FormFeedback} from 'reactstrap';
import {connect} from 'react-redux';
import StarRatings  from 'react-star-ratings'
import {DanhGiaSP} from '../actions/sanphamActions';
import PropTypes from 'prop-types';


class Danhgia extends Component {
    constructor(props) {
        super(props);
        this.state={
            Ngoisao:0,
            errors:{}
        }
        this.changeRating=this.changeRating.bind(this)
    }
   
    onSubmit=(e)=>{
        e.preventDefault();
        const { id } = this.props;
        
        const { user } = this.props.user;
       const newNgoisao={
        Ngoisao:this.state.rating,
        name:user.fullName,
        user:user._id
       }
       
        this.props.DanhGiaSP(id,newNgoisao);
        
    }
    
    componentWillReceiveProps=(nextProps)=>{
        this.setState({
            errors:nextProps.errors
        })
    }
    changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
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
                    <Label>Hãy đánh giá sản phẩm</Label>
                </Col>
                <Col  sm='6'>
                <StarRatings
          rating={this.state.rating}
          starRatedColor="yellow"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
          starDimension="30px"
         
        />
     <FormFeedback>{ errors.nouser ?  errors.nouser : null}</FormFeedback>
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
export default connect(mapStateToProps,{DanhGiaSP})(Danhgia);