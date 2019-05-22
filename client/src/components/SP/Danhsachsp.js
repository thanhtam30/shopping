import React, { Component } from 'react';
import {connect} from 'react-redux';
import Spinner from '../common/Spinner';
import {HienthiSP} from '../../actions/sanphamActions';
import DanhSachCon from './Danhsachconsp';
import PropTypes from 'prop-types'
class Danhsachsp extends Component {
    componentDidMount(){
        this.props.HienthiSP();
    }
    render() {
        const {sanpham}=this.props.sanpham
        
       
        let Danhsach;
        if(sanpham===0 ){
            Danhsach=<Spinner/>
        }else{
            Danhsach= <DanhSachCon sanpham={sanpham} />
        }
        return (
            <div>
                {Danhsach}
            </div>
        );
    }
}
Danhsachsp.propTypes={
sanpham:PropTypes.object.isRequired,
HienthiSP:PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        sanpham: state.sanpham
    }
}
export default connect(mapStateToProps,{HienthiSP})(Danhsachsp);