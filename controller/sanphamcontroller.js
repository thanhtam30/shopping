const {SanPham}=require('../models/sanpham');
var _ = require('lodash');
module.exports.Hienthi=(req,res)=>{
    SanPham.find().populate(['NhaSX','TenNhaSX -_id'])
    .populate(['DanhMuc','TenDanhMuc -_id'])
.then(sp=>{
        res.status(200).json(sp)
    })
    .catch(err=>res.status(400).json(err));
}
module.exports.Hienthiid=(req,res)=>{
    const id=req.params.id;
    SanPham.findById(id).then((sp)=>{
        res.status(200).json(sp)})
    .catch(err=>res.status(400).json(err))
}
module.exports.HienthiCapNhat=(req,res)=>{
    const id=req.params.id;
    SanPham.findById(id).then(sp=>res.status(200).json(sp))
    .catch(err=>res.status(400).json(err))
}

module.exports.Xoa=(req,res)=>{
    const id=req.params.id;
    SanPham.findByIdAndDelete(id).then(sp=>{
        
        res.status(200).json('Xóa thành công')
    }).catch(err=>res.status(400).json(err))
}