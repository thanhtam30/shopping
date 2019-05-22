/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import {HienThiID} from '../actions/sanphamActions'
import ChiTiet from './chitietsanphamcon';
import Chitietbinhluan from './Chitietbinhluan'
import {Spinner} from 'reactstrap'
class chitietsanpham extends React.Component {
	componentDidMount(){
		if(this.props.match.params.id){
				this.props.HienThiID(this.props.match.params.id)
		}
	}
	render() {
		const { sanphams } = this.props.sanpham;
		
		let chitiet;
	
		if (sanphams === null ) {
		  chitiet = <Spinner />;
		} else {
		  chitiet =
			<div>
			
						  <ChiTiet sanphams={sanphams}/>
				<Chitietbinhluan BinhLuan={sanphams.BinhLuan}/>
			</div>
	
			  
		}
	
	

		
		return (
			<div className="profile">
			<div className="container">
			  <div className="row">
				<div className="col-md-12">{chitiet}</div>
			  </div>
			</div>
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
