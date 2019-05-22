const {DanhMuc}=require('../models/danhmuc');

module.exports.Hienthi=(req,res)=>{
    DanhMuc.find().then(danhmuc=>{
        res.status(200).json(danhmuc)
    })
    .catch(err=>res.status(400).json(err));
}
module.exports.Them=(req,res)=>{
    const {TenDanhMuc}=req.body;
    
    const DanhMucMoi=new DanhMuc({
        TenDanhMuc
    });
    DanhMucMoi.save().then(danhmuc=>{
        res.status(200).json(danhmuc)
    })
    .catch(err=>res.status(400).json(err))
}
module.exports.HienthiCapNhat=(req,res)=>{
    const id=req.params.id;
    DanhMuc.findById(id).then(danhmuc=>res.status(200).json(danhmuc))
    .catch(err=>res.status(400).json(err))
}
module.exports.CapNhat=(req,res)=>{
    
    DanhMuc.findById(req.params.id).then(danhmuc=>{
    
        danhmuc.TenDanhMuc=req.body.TenDanhMuc;
       return danhmuc.save()
        console.log(danhmuc)
    })
}
module.exports.Xoa=(req,res)=>{
    const id=req.params.id;
    DanhMuc.findByIdAndDelete(id).then(danhmuc=>{
        
        res.status(200).json('Xóa thành công')
    }).catch(err=>res.status(400).json(err))
}