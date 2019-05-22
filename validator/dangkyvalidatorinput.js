const _ = require('lodash');
const validator = require('validator')

const validatedangkyInput = (data) => {
    let errors = {}

    let {email, password,  fullName, phone} = data;
    if(!email) email = "";
    if(!password) password = "";
    
    if(!fullName) fullName = ""

    // validate email
    if(!validator.isEmail(email)){
        errors.email = "Không đúng kiểu email"
    }
    if(validator.isEmpty(email)){
        errors.email = "Email không được rỗng"
    }

    if(validator.isEmpty(phone)){
        errors.phone = "Số điện thoại không được rỗng"
    }
   
    
    // validate fullName
    if(validator.isEmpty(fullName)){
        errors.fullName = "Tên không được rỗng"
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}

module.exports = validatedangkyInput;