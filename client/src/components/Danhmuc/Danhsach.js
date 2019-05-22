import React, { Component } from 'react';
import {connect} from 'react-redux';
import Spinner from '../common/Spinner';
import {HienthiDM} from '../../actions/danhmucActions';
import DanhSachCon from './Danhsachcon';
import PropTypes from 'prop-types'
class Danhsach extends Component {
    componentDidMount(){
        this.props.HienthiDM();
    }
    render() {
        const {danhmuc}=this.props.danhmuc
       console.log(danhmuc);
       
        let Danhsach;
        if(danhmuc===0 ){
            Danhsach=<Spinner/>
        }else{
            Danhsach= <DanhSachCon danhmuc={danhmuc}/>
        }
        return (
            <div>
                {Danhsach}
            </div>
        );
    }
}
Danhsach.propTypes={
danhmuc:PropTypes.object.isRequired,
HienthiDM:PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        danhmuc: state.danhmuc
    }
}
export default connect(mapStateToProps,{HienthiDM})(Danhsach);