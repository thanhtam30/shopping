const mongoose=require('mongoose');
const NhaSXSchema= new mongoose.Schema({
    TenNhaSX:{type:String,required:true}
})
const NhaSX=mongoose.model('NhaSX',NhaSXSchema);
module.exports={NhaSX,NhaSXSchema}