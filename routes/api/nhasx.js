const express=require('express');
const {Hienthi,HienthiCapNhat,Them,Xoa}=require('../../controller/nhasxcontroller');
const {validatorthemnhasx,validatorcapnhatnhasx} = require("../../validator/nhasxvalidatorinput");
const {NhaSX}=require('../../models/nhasx')
const router = express.Router();
router.get('/hienthi',Hienthi);
router.post('/them',validatorthemnhasx,Them);
router.get('/hienthicapnhat/:id',HienthiCapNhat);
router.post('/capnhat/:id',(req,res)=>{
      
    NhaSX.findById(req.params.id).then(nhasx=>{
    
        nhasx.TenNhaSX=req.body.TenNhaSX;
        nhasx.save()
        
    })
});
router.delete('/xoa/:id',Xoa);
module.exports = router;