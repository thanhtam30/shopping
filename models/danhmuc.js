const mongoose=require('mongoose');
const DanhMucSchema=new mongoose.Schema({
    TenDanhMuc:{type:String,required:true}
});
const DanhMuc=mongoose.model('DanhMuc',DanhMucSchema)
module.exports={DanhMuc,DanhMucSchema}
