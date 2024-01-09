// function: to send response of 2FA
'use strict'

const DAO=require('../../../models/daos')
const services=require('../services');
let twoFAService= async (req, res)=>{
    const username=req.body["username"];
    const password=req.body["password"];
    res.send(await DAO.usersDAO.authenticate(username, password));
    //if(){
        // try{
        //     const phoneNumber=await DAO.usersDAO.getPhoneNumber(username);
        //     const email=await DAO.usersDAO.getEmail(username);
        //     const otp=await services.authenticationService.generateOTPService();
        //     //res.send(await services.communicationService.sendSMS(phoneNumber, otp))
        //     //res.send(await services.communicationService.sendEmail(email, otp));
        //     res.send({"output": true});
        // }catch(err){
        //     res.send(err);
        // }
    // }else{
    //     res.send({"output": false});
    // }
}
exports.twoFAService=twoFAService