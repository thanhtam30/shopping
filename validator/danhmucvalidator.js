const validator = require("validator");

module.exports.validatorthemdanhmuc = (req, res, next) =>{
    let errors = {};
    const {TenDanhMuc} = req.body;
    if(!req.body.TenDanhMuc) req.body.TenDanhMuc=" ";
  
    if(validator.isEmpty(TenDanhMuc)){
        errors.TenDanhMuc = "Tên danh mục không được rỗng";        
    }else if(!validator.isLength(TenDanhMuc,{min:4,max:60})){
        errors.TenDanhMuc='Tên danh mục sản phẩm có  ít nhất 4 ký tự'
    }
    

    // send errors if not valite
    if(Object.keys(errors).length){
        return res.status(400).json(errors);
    }
    next();
}
module.exports.validatorcapnhatdanhmuc=(req,res,next)=>{
    let errors={};
    const {TenDanhMuc}=req.body;
    if(!req.body.TenDanhMuc)req.body.TenDanhMuc=" ";
    if(validator.isEmpty(TenDanhMuc)){
        errors.TenDanhMuc='Tên danh mục không được rỗng'
    }else if(!validator.isLength(TenDanhMuc,{min:4,max:60})){
        errors.TenDanhMuc='Tên danh mục ít nhất phải có 4 ký tự'
    }
    if(Object.keys(errors).length){
        return res.status(400).json(errors);
        next();
    }
}

