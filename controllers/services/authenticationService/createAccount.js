// function: send response for account creation
'use strict'

const DAO=require('../../../models/daos');
const authenticationService=require('../authenticationService');
let createAccountService=async (req, res)=>{
    console.log("request received: \n"+req.body);
    const userData=req.body;
    // hash the password
    const hashedPassword=await authenticationService.hashPasswordService(userData["password"]);
    // store the password
    res.send(await DAO.usersDAO.addNewUser(userData["username"], hashedPassword, userData["contact"], userData["email"], userData["type"]))
}
exports.createAccountService=createAccountService

