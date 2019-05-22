const express=require('express');
const {Hienthi,HienthiCapNhat,Them,CapNhat,Xoa}=require('../../controller/danhmuccontroller');
const {validatorthemdanhmuc,validatorcapnhatdanhmuc} = require("../../validator/danhmucvalidator");
const {DanhMuc}=require('../../models/danhmuc')
const router = express.Router();
router.get('/hienthi',Hienthi);
router.post('/them',validatorthemdanhmuc,Them);
router.get('/hienthicapnhat/:id',HienthiCapNhat);
router.post('/capnhat/:id',(req,res)=>{
      
    DanhMuc.findById(req.params.id).then(danhmuc=>{
    
        danhmuc.TenDanhMuc=req.body.TenDanhMuc;
        danhmuc.save()
        
    })
});
router.delete('/xoa/:id',Xoa);
module.exports = router;