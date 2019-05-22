const express=require('express');
const router=express.Router();
const {Thanhtoan}=require('../../models/thanhtoan');
const {authenticating} = require('../../middleware/auth')
  // SAVE SESSION CART API
  router.post('/', function(req, res){
    var cart = req.body;
    req.session.cart = cart;
    req.session.save(function(err){
      if(err){
        console.log('# API POST CART SESSION: ', err);
      }
      
      res.json(req.session.cart);
    })
  });
  // GET SESSION CART API
  router.get('/', function(req, res){
    if(typeof req.session.cart !== 'undefined'){
      res.json(req.session.cart);
    }
  });
//--->>> END SESSION SET UP <<<----
router.post('/thanhtoan',authenticating,(req,res)=>{
  const {DiaChi}=req.body;
    
    const thanhtoan=new Thanhtoan({
        DiaChi,
        cart:req.session.cart,
        user:req.user.id
    });
    thanhtoan.save().then(thanhtoan=>{
      req.session.destroy();
     
        res.status(200).json(thanhtoan)
    })
    .catch(err=>res.status(400).json(err))
})
router.get('/thanhtoan',(req,res)=>{
  Thanhtoan.find()
  .populate(['user','phone fullName  -_id'])
  .then(thanhtoan=>{
    res.json(thanhtoan)
  }).catch(console.log())
})
router.get('/xemthanhtoan/:id',(req,res)=>{
  Thanhtoan.findById(req.params.id)
  .populate(['user','phone fullName  -_id'])
  .then(thanhtoan=>{
    res.json(thanhtoan)
  }).catch(console.log())
})
router.post('/capnhatthanhtoan/:id',(req,res)=>{
Thanhtoan.findOneAndUpdate({id:req.params.id},req.body,{new:true}).then(thanhtoan=>{
  res.json(thanhtoan)
})
.catch(console.log)
//   Bookmark.findOneAndUpdate({userId: req.params.userId}, req.body, {new: true}, function(err, bookmark){

//   }
// })
})
module.exports=router;