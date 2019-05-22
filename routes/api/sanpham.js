const express=require('express');
const {SanPham}=require('../../models/sanpham');
const {Hienthi,HienthiCapNhat,Xoa,Hienthiid}=require('../../controller/sanphamcontroller');
const {authenticating} = require('../../middleware/auth')
const router = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

var upload = multer({ storage: storage });
router.get('/',Hienthi);
router.post('/',upload.any(),(req,res)=>{
    const hinhanh=[];
    for (let i = 0; i < req.files.length; i ++) {
        hinhanh.push(req.files[i].originalname)
        
      }
const newsp=new SanPham({
    TenSanPham:req.body.TenSanPham,
    HinhAnh:hinhanh,
    Gia:req.body.Gia,
    ChiTiet:req.body.ChiTiet,
    DanhMuc:req.body.DanhMuc,
    NhaSX:req.body.NhaSX
})
newsp.save()
console.log(newsp)
})
// router.get('/hienthiid1/:id',(req,res)=>{
//     const id=req.params.id;
//     SanPham.findById(id).then((sp)=>{
//         let Danhgia=sp.DanhGia
     
//         // let ns = Danhgia.reduce((Ngoisao, dg) => {
//         //     return Ngoisao += (dg.Ngoisao)/(Danhgia.length)
//         // }, 0)

//       let ns=0;
//       for(let i=0;i<Danhgia.length;i++){
//           ns+=(Danhgia[i].Ngoisao/Danhgia.length)
//       }
//         console.log(ns)
//          res.status(200).json(sp)
//     })
//     .catch(err=>res.status(400).json(err))
// })
router.get('/hienthiid/:id',Hienthiid);
router.get('/hienthicapnhat/:id',HienthiCapNhat);
router.post('/capnhat/:id',upload.any(),(req,res)=>{
    const hinhanh=[];
    for (let i = 0; i < req.files.length; i ++) {
        hinhanh.push(req.files[i].originalname)
        
      }
      SanPham.findById(req.params.id).then(sp=>{
          if(typeof req.file=='undefined'){
              sp.TenSanPham=req.body.TenSanPham;
              sp.Gia=req.body.Gia;
              sp.ChiTiet=req.body.ChiTiet;
              sp.DanhMuc=req.body.DanhMuc;
              sp.NhaSX=req.body.NhaSX
              sp.save();
              console.log(sp);
              
          }else{
            sp.TenSanPham=req.body.TenSanPham;
            sp.Gia=req.body.Gia;
            sp.ChiTiet=req.body.ChiTiet;
            sp.DanhMuc=req.body.DanhMuc;
            sp.NhaSX=req.body.NhaSX
            sp.HinhAnh=hinhanh;
            sp.save();
            console.log(sp);
            
          }

      })
})
router.delete('/xoa/:id',Xoa);
router.post('/DanhGia/:id',authenticating,(req,res)=>{
    const user=req.user.id;
    const errors={};
    SanPham.findById(req.params.id).then((sp)=>{
        
        if(sp.DanhGia.find(danhgia=>danhgia.user==user)){
            errors.nouser='Bạn đã đánh giá rồi nên không được tiếp tục đánh giá'
            return res.status(400).json(errors);
        }
        const newDanhgia=({
            user:req.user.id,
            Ngoisao:req.body.Ngoisao,
            name:req.body.name
        })
        sp.DanhGia.push(newDanhgia);
        
        
        sp.save().then(sp=>res.json(sp)
        
        )
        console.log(sp)
    }).catch(console.log)
})
router.post('/Binhluan/:id',authenticating,(req,res)=>{
    const user=req.user.id
    SanPham.findById(req.params.id).then((sp)=>{
        const newBinhluan=({
            user:req.user.id,
            name:req.body.name,
            BinhLuan:req.body.BinhLuan
        })
        sp.BinhLuan.push(newBinhluan);
        sp.save().then(sp=>res.json(sp));
        console.log(sp)

    }).catch((console.log))
})
module.exports = router;