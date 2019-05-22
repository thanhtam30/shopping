import React, { Component } from 'react';
import {connect} from 'react-redux';
import Spinner from '../common/Spinner';
import {HienThiNhaSX} from '../../actions/nhasxAction';
import Danhsachconnhasx from './Danhsachconnhasx';
import PropTypes from 'prop-types'
class Danhsachnhasx extends Component {
    componentDidMount(){
        this.props.HienThiNhaSX();
    }
    render() {
        const {nhasx}=this.props.nhasx
       
       console.log(nhasx)
        let Danhsach;
        if(nhasx===0 ){
            Danhsach=<Spinner/>
        }else{
            Danhsach= <Danhsachconnhasx nhasx={nhasx}/>
        }
        return (
            <div>
                {Danhsach}
            </div>
        );
    }
}
Danhsachnhasx.propTypes={
nhasx:PropTypes.object.isRequired,
HienThiNhaSX:PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        nhasx: state.nhasx
    }
}
export default connect(mapStateToProps,{HienThiNhaSX})(Danhsachnhasx);