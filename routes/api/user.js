const express=require('express');
const router=express.Router();
const passport=require('passport');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs')
const {User}=require('../../models/user');
const validatedangkyInput = require('../../validator/dangkyvalidatorinput')
const validatedangnhapInput = require('../../validator/login')

router.post('/dangky',(req,res)=>{
const {fullName,email,password,phone}=req.body


const {errors, isValid} = validatedangkyInput(req.body);

    if(!isValid) return res.status(400).json(errors)
User.findOne({$or:[{email},{phone}]}).then(user=>{
if(user){
    if(user.email==email){errors.noemail='Email đã sử dụng'}
    if(user.phone===phone){errors.nophone='Số điện thoại đã sử dụng'}
    return res.status(400).json(errors);
}
const newUser=new User({
    fullName,email,password,phone
})
bcrypt.genSalt(10, (err, salt) => {
    if(err) return res.status(400).json(err)

    bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) return res.status(400).json(err)

        newUser.password = hash;
        newUser.save()
            .then(user => {
                res.status(200).json(user)
            })
            .catch(err => res.status(400).json(err))
    })
})
}).catch(console.log)
})
router.post('/dangnhap', (req, res) => {
    
     const {errors,isValid}=validatedangnhapInput(req.body)
    if(!isValid){
        return res.status(400).json(errors);
    }
    

    const {email, password, fingerprint } = req.body;

    User.findOne({email})
        .then(user => {
            if(!user){
                errors.nouser='Email không đúng'
                return res.status(400).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(result => {
                    if(!result){
                        errors.nopass='Mật khẩu không đúng'
                        return res.status(400).json(errors)
                    }

                    const payload = {
                        id: user._id,
                        email: user.email,
                        userType:user.userType,
                        fullName: user.fullName
                    }
                    
                    jwt.sign(
                        payload,
                        "cybersoft"+fingerprint,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) return res.status(400).json(err)

                            console.log(token)
                            res.status(200).json({
                                msg: "Login success",
                                token: token
                            })
                        }
                    )
                })
                .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))

})

module.exports=router