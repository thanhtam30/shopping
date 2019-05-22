const mongoose=require('mongoose')
const SanPhamSchema=new mongoose.Schema({
    TenSanPham:{type:String,required:true},
    HinhAnh:{type:[String]},
    Gia:{type:Number,default:0},
    ChiTiet:{type:String}    ,
    DanhMuc:{type:mongoose.Schema.Types.ObjectId,ref:'DanhMuc'},
    NhaSX:{type:mongoose.Schema.Types.ObjectId,ref:'NhaSX'},
    DanhGia:[
        {user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
        name:{type:String},
        Ngoisao:{type:Number}}
    ],
    
    BinhLuan:[
        {User:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
        name:{type:String},
        
            BinhLuan:{type:String},
            Thoigian:{type:Date,default:Date.now}
        }
    ]
})
const SanPham=mongoose.model('SanPham',SanPhamSchema);
module.exports={SanPham,SanPhamSchema};