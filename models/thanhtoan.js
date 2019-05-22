const mongoose=require('mongoose');
const ThanhtoanSchema= new mongoose.Schema({
    DiaChi:{type:String},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    cart:{type:Object},
    Ngaymuahang:{type:Date,default:Date.now}
})
const Thanhtoan=mongoose.model('Thanhtoan',ThanhtoanSchema);
module.exports={Thanhtoan,ThanhtoanSchema}