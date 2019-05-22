const jwt = require('jsonwebtoken')

const authenticating = (req, res, next) => {
    const token = req.header('Authorization') || ""
    const fingerprint =  req.header('fingerprint') || ""

    if(!token) res.status(400).json({errors: "Token not provided"})

    try {
        const decoded = jwt.verify(token, "cybersoft" + fingerprint)
        req.user = decoded
        next()
        
    } catch (error) {
        res.status(400).json({errors: "Token is invalid"})
    }
}


const authorizing = (userType) => {
    return (req, res, next) => {
        if(req.user.userType === userType){
            next()
        } else {
            res.json({msg: 'You dont have permission'})
        }
    }
}


module.exports = {
    authorizing, authenticating
}