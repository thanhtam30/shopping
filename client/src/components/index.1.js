/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { HienthiSP } from '../actions/sanphamActions';
import Product from './indexitem';

class index extends React.Component {
	constructor(props) {
		super(props);
		// this.filteredItems = this.filteredItems.bind(this);
		this.props.HienthiSP();
	}

	// filteredItems() {
	// 	const searched = _.filter(this.props.sanpham, x => {
	// 		const re = new RegExp(this.props.search.sanpham, 'gi');
	// 		const re2 = new RegExp(this.props.search.danhmuc, 'gi');
	// 		if (x.TenSanPham.search(re) >= 0 && x.DanhMuc.TenDanhMuc.search(re2) >= 0) return true;
	// 		return false;
			
	// 	});

	// 	return searched.map(sanpham => (
	// 		<div className="col s6" key={sanpham._id}>
	// 			<Product sanpham={sanpham} />
	// 		</div>
	// 	));
	// }

	render() {
		var {   keyword } = this.props;
		var {sanpham}=this.props
		console.log(sanpham);
		
		// var {sanpham}=this.props.sanpham
		 // search
		 sanpham = _.filter(this.props.sanpham,x => {
            return x.TenSanPham.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
		});
		
        var elmTasks = sanpham.map((sanpham) => {
            return (
                <Product
                   
                    sanpham={sanpham}
                   
                />
            )
        });
		return (
			<div className="row">
		 { elmTasks }
		{/* {this.filteredItems()} */}
		</div>
		)
		
	}
}
function mapStateToProps(state){
	return{
	  sanpham: state.sanpham.sanpham,
	//   search: state.search,
	keyword : state.search
	}
  }


export default connect(
	mapStateToProps,
	{HienthiSP}
)(index);
