import React, { Component } from 'react';
import {connect} from 'react-redux'
import {HienThiCapNhatSP,CapNhatSP} from '../../actions/sanphamActions'
import isEmpty from 'is-empty';
import {HienthiDM} from '../../actions/danhmucActions';
import {HienThiNhaSX} from '../../actions/nhasxAction'
import { Container, Row, Col , Button, Form, Label, Input, FormFeedback} from 'reactstrap';


class Capnhatsp extends Component {
    constructor(props) {
        super(props);
        this.state={
            TenSanPham:'',
           HinhAnh:[],
           Gia:0,
            ChiTiet:'',
            DanhMuc:'',
            NhaSX:'',
            errors: {},
            
        }
    }
   
    onChange=e=>{
       
              this.setState({ [e.target.name]: e.target.value });
        
    }
    onChangeHandler=event=>{
        console.log(event.target.files[0].name)
        this.setState({
        //  HinhAnh:  event.target.files
         HinhAnh:[...this.state.HinhAnh,event.target.files[0].name]
        })
    }
    onSubmit=e=>{
        e.preventDefault();
        const {TenSanPham,Gia,ChiTiet,DanhMuc,NhaSX,HinhAnh}=this.state;
     
        console.log(HinhAnh)
        let formData = new FormData();
        // for(var x = 0; x<this.state.HinhAnh.length; x++) {
        //     formData.append('HinhAnh', this.state.HinhAnh[x])
        // }
        formData.append('TenSanPham', TenSanPham);
        formData.append('Gia', Gia);
        formData.append('HinhAnh', HinhAnh);
        formData.append('ChiTiet', ChiTiet);
        formData.append('DanhMuc', DanhMuc);
        formData.append('NhaSX', NhaSX);
     
        
            
        this.props.CapNhatSP(this.props.match.params.id,formData,this.props.history);
    }
   
    componentDidMount(){
        if(this.props.match.params.id){
            this.props.HienThiCapNhatSP(this.props.match.params.id)
        }
        this.props.HienThiNhaSX();
        this.props.HienthiDM();
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.sanpham.sanpham)
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
          }
          if(nextProps.sanpham.sanpham){
              const {sanpham}=nextProps.sanpham
              sanpham.TenSanPham=!isEmpty(sanpham.TenSanPham)?sanpham.TenSanPham:'';
              sanpham.Gia=!isEmpty(sanpham.Gia)?sanpham.Gia:'';
              sanpham.ChiTiet=!isEmpty(sanpham.ChiTiet)?sanpham.ChiTiet:'';
              sanpham.HinhAnh=!isEmpty(sanpham.HinhAnh)?sanpham.HinhAnh:'';
              sanpham.NhaSX=!isEmpty(sanpham.NhaSX)?sanpham.NhaSX:'';
              sanpham.DanhMuc=!isEmpty(sanpham.DanhMuc)?sanpham.DanhMuc:'';
              this.setState({
                  TenSanPham:sanpham.TenSanPham,
                  Gia:sanpham.Gia,
                  HinhAnh:sanpham.HinhAnh,
                  ChiTiet:sanpham.ChiTiet,
                  NhaSX:sanpham.NhaSX,
                  DanhMuc:sanpham.DanhMuc
              })
          }
        
      }
     
    render() {
        const { errors } = this.state;
        const {danhmuc}=this.props.danhmuc
        const optiondm=  (this.props && this.props.danhmuc.danhmuc &&this.props.danhmuc.danhmuc.length) > 0 ?this.props.danhmuc.danhmuc.map((exp,index) => {
            
            return <option value={exp._id} key={index}>{exp.TenDanhMuc} </option>
        }):<option/>
        const {nhasx}=this.props.nhasx
        
        const optionnhasx=  (this.props && this.props.nhasx.nhasx &&this.props.nhasx.nhasx.length) > 0 ?this.props.nhasx.nhasx.map((exp,index) => {
            
            return <option value={exp._id} key={index}>{exp.TenNhaSX} </option>
        }):<option/>
    //    const hinhanh= (this.state && this.state.HinhAnh &&this.state.HinhAnh.length) > 0 ?this.state.HinhAnh.map((ha,index) => {
    //     return   <img key={index} src={ha} width='50px' height='50px'/>
    //    }):<img/>
        
        return (
            
          <div>
               <Container>
           <h1 >Cập nhật  sản phẩm</h1>
            <br/>
            
            <Form onSubmit={this.onSubmit}>
           <Row>
           <Col  sm='6'>
                    <Label>Tên sản phẩm</Label>
                </Col>
                <Col  sm='6'>
                <Input
                            type="text"
                            name="TenSanPham"
                            id="TenSanPham"
                            placeholder="Tên sản phẩm..."
                            onChange={this.onChange}
                            value={this.state.TenSanPham}
                           // invalid={errors.TenDanhMuc ? true : false}
                        />
                         {/* <FormFeedback>{errors.TenDanhMuc ? errors.TenDanhMuc : null}</FormFeedback> */}
                </Col>
           </Row>
           <br/>
           <Row>
           <Col  sm='6'>
                    <Label>Gía sản phẩm</Label>
                </Col>
                <Col  sm='6'>
                <Input
                            type="text"
                            name="Gia"
                            id="Gia"
                            placeholder="Tên sản phẩm..."
                            onChange={this.onChange}
                            value={this.state.Gia}
                           // invalid={errors.TenDanhMuc ? true : false}
                        />
                         {/* <FormFeedback>{errors.TenDanhMuc ? errors.TenDanhMuc : null}</FormFeedback> */}
                </Col>
           </Row>
           <br/>
           <Row>
           <Col  sm='6'>
                    <Label>Chi tiết sản phẩm</Label>
                </Col>
                <Col  sm='6'>
                <Input
                            type="text"
                            name="ChiTiet"
                            id="ChiTiet"
                            placeholder="Tên sản phẩm..."
                            onChange={this.onChange}
                            value={this.state.ChiTiet}
                           // invalid={errors.TenDanhMuc ? true : false}
                        />
                         {/* <FormFeedback>{errors.TenDanhMuc ? errors.TenDanhMuc : null}</FormFeedback> */}
                </Col>
           </Row>
         
           <br/>
           <Row>
           <Col  sm='6'>
                    <Label>Danh mục sản phẩm</Label>
                </Col>
                <Col  sm='6'>
                <select  value={this.state.DanhMuc }
                                 onChange={this.onChange}
                                 
                                 name="DanhMuc"
                                 className='form-control'
                           // invalid={errors.TenDanhMuc ? true : false}
                        >
                        <option value=''>Chọn danh mục sản phẩm</option>
                            {optiondm}
                        </select>
                         {/* <FormFeedback>{errors.TenDanhMuc ? errors.TenDanhMuc : null}</FormFeedback> */}
                </Col>
           </Row>
           <br/>
           <Row>
           <Col  sm='6'>
                    <Label>Nhà sản xuất sản phẩm</Label>
                </Col>
                <Col  sm='6'>
                <select  value={this.state.NhaSX }
                                 onChange={this.onChange}
                                 
                                 name="NhaSX"
                                 className='form-control'
                           // invalid={errors.TenDanhMuc ? true : false}
                        >
                        <option value=''>Chọn nhà sản xuất sản phẩm</option>
                            {optionnhasx}
                        </select>
                         {/* <FormFeedback>{errors.TenDanhMuc ? errors.TenDanhMuc : null}</FormFeedback> */}
                </Col>
           </Row>
           <br/>
           <Row>
           <Col  sm='6'>
                    <Label>Hình ảnh</Label>
                </Col>
                <Col  sm='6'>
                <div className='col-md-8'>
              
                                <input type='file'
                                    name='HinhAnh' 
                                    onChange={this.onChangeHandler}
                                    multiple 
                                   className='form-control'
                                /> 
                                {/* {hinhanh} */}
{/*                                
                               <Dropzone
      name='HinhAnh'
      onChange={this.onChangeHandler}
      maxFiles={3}
      inputContent="Drop 3 Files"
      inputWithFilesContent={files => `${3 - files.length} more`}
      submitButtonDisabled={files => files.length < 3}
    /> */}
                            </div>
                          

                </Col>
    
           </Row>
         
           <br/>
           <Row>
           
           <Button color="primary" size="lg" block>Submit</Button>
               
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
        danhmuc:state.danhmuc,
        sanpham:state.sanpham,
        nhasx:state.nhasx
    }
}
export default connect(mapStateToProps,{HienThiCapNhatSP,HienThiNhaSX,HienthiDM,CapNhatSP})(Capnhatsp);