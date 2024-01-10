// function: to send response of 2FA
'use strict'

const DAO=require('../../../models/daos')
const services=require('../services');
let twoFAService= async (req, res)=>{
    const username=req.body["username"];
    const password=req.body["password"];
    //res.send();
    if(await DAO.usersDAO.authenticate(username, password)){
        try{
            const phoneNumber=await DAO.usersDAO.getPhoneNumber(username);    
            const email=await DAO.usersDAO.getEmail(username);
            const otp=services.authenticationService.generateOTPService();
            //res.send(await services.communicationService.sendSMS(phoneNumber, otp))
            services.cachingService.storeInCacheService(username, otp, 120);
            res.send(await services.communicationService.sendEmail(email, otp));
        }catch(err){
            res.send(err.message)
        }
        
    }else{
        res.send({"output": false});
    }
}
exports.twoFAService=twoFAService