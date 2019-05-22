/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import {HienThiID} from '../actions/sanphamActions'
import { Card, Row,Col, Button, CardHeader, CardFooter, CardBody,
	CardTitle, CardText,Table} from 'reactstrap';
	import Binhluan from './BinhLuansp';
	import Danhgia from './Danhgia';
	import StarRatings  from 'react-star-ratings';
	import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class chitietsanpham extends React.Component {

	render() {
		const {sanphams}=this.props.sanpham
	

	    

		
		
		const hinhanh=(sanphams.HinhAnh &&sanphams.HinhAnh.length) > 0 ?sanphams.HinhAnh.map((item,index)=>(
			<div key={index}>
					<img  src={item} width='100px' height='100px'/>
					</div>
		
			
			
		)):<img/>


		const ngoisao=(sanphams.DanhGia &&sanphams.DanhGia.length) > 0 ?sanphams.DanhGia.reduce((Ngoisao, dg) =>( Ngoisao += (dg.Ngoisao)/(sanphams.DanhGia.length)
		), 0):0;
		
		return (
			<div>
				<Row>
					<Col sm={4 }>
					Tên Sản Phẩm
					</Col>
					<Col sm={8}>
					{sanphams.TenSanPham}</Col>
				</Row>
				<Row>
					<Col sm={4}>
					Giá
					</Col>
					<Col sm={8}>
					{sanphams.Gia}</Col>
				</Row>
				<Row>
					<Col sm={4}>
					Chi Tiết
					</Col>
					<Col sm={8}>
					{sanphams.ChiTiet}</Col>
				</Row>
				<Row>
					<Col sm={4}>
				Hình Ảnh
					</Col>
					<Col sm={8}>
					{(sanphams.HinhAnh &&sanphams.HinhAnh.length) > 0 ?sanphams.HinhAnh.map((item,index)=>(
			<div key={index}>
					<img  src={item} width='100px' height='100px'/>
					</div>
		
			
			
		)):<img/>
}
					
					
					
					</Col>
				
				</Row>
				<Row>
				<Col sm={4}>Đánh gia</Col>
					<Col sm={8}><StarRatings
					          starRatedColor="yellow"
        rating={ngoisao}
        starDimension="30px"
        
      />
</Col>
				

					
				</Row>
				<Row>
					<Col sm={6}><Binhluan id={sanphams._id}/></Col>
					<Col sm={6}><Danhgia id={sanphams._id}/></Col>
				</Row>
				
				<Row>


			<Carousel showThumbs ={true}  showStatus={false}>

			{(sanphams.HinhAnh &&sanphams.HinhAnh.length) > 0 ?sanphams.HinhAnh.map((item,index)=>(
			<div key={index}>
					<img  src={item} width='100px' height='100px'/>
					</div>
		
			
			
		)):<img/>}

				
			</Carousel>       

               
            
</Row>
				
			</div>
		
		);
	}
}

const mapStateToProps = (state) => {
	return {
		sanpham: state.sanpham
	}
}
export default connect(mapStateToProps,{HienThiID})(chitietsanpham);
