// function: hash password with salt and send it back
'use strict'
const bcrypt = require("bcryptjs")
    
let hashPasswordService=async (password)=>{
    try{
        try{
            return await bcrypt.hash(password, 0);
        }catch(err){
            throw err;
        }
    }catch(err){
        throw err;
    }
}
exports.hashPasswordService=hashPasswordService

