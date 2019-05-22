const validator = require("validator");

module.exports.validatorthemnhasx = (req, res, next) =>{
    let errors = {};
    const {TenNhaSX} = req.body;
    if(!req.body.TenNhaSX) req.body.TenNhaSX=" ";
  
    if(validator.isEmpty(TenNhaSX)){
        errors.TenNhaSX = "Tên nhà sản xuất không được rỗng";        
    }else if(!validator.isLength(TenNhaSX,{min:4,max:60})){
        errors.TenNhaSX='Tên nhà sản xuất sản phẩm có  ít nhất 4 ký tự'
    }
    

    // send errors if not valite
    if(Object.keys(errors).length){
        return res.status(400).json(errors);
    }
    next();
}
module.exports.validatorcapnhatnhasx=(req,res,next)=>{
    let errors={};
    const {TenNhaSX}=req.body;
    if(!req.body.TenNhaSX)req.body.TenNhaSX=" ";
    if(validator.isEmpty(TenNhaSX)){
        errors.TenNhaSX='Tên nhà sản xuất không được rỗng'
    }else if(!validator.isLength(TenNhaSX,{min:4,max:60})){
        errors.TenNhaSX='Tên nhà sản xuất ít nhất phải có 4 ký tự'
    }
    if(Object.keys(errors).length){
        return res.status(400).json(errors);
        next();
    }
}

