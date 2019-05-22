const {NhaSX}=require('../models/nhasx');

module.exports.Hienthi=(req,res)=>{
    NhaSX.find().then(nhasx=>{
        res.status(200).json(nhasx)
    })
    .catch(err=>res.status(400).json(err));
}
module.exports.Them=(req,res)=>{
    const {TenNhaSX}=req.body;
    
    const NhaSXMoi=new NhaSX({
        TenNhaSX
    });
    NhaSXMoi.save().then(nhasx=>{
        res.status(200).json(nhasx)
    })
    .catch(err=>res.status(400).json(err))
}
module.exports.HienthiCapNhat=(req,res)=>{
    const id=req.params.id;
    NhaSX.findById(id).then(nhasx=>res.status(200).json(nhasx))
    .catch(err=>res.status(400).json(err))
}
module.exports.CapNhat=(req,res)=>{
    
    DanhMuc.findById(req.params.id).then(danhmuc=>{
    
        danhmuc.TenNhaSX=req.body.TenNhaSX;
     return   danhmuc.save()
        console.log(danhmuc)
    })
}
module.exports.Xoa=(req,res)=>{
    const id=req.params.id;
    NhaSX.findByIdAndDelete(id).then(nhasx=>{
        
        res.status(200).json('Xóa thành công')
    }).catch(err=>res.status(400).json(err))
}