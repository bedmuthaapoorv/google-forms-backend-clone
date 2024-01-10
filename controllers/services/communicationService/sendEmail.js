// function: to send email
'use strict'
let connectors=require('../../../models/connectors')
let sendEmail= async (email, message)=>{
    let mailOptions={
        from:'bedmuthaapoorv@gmail.com',
        to:email,
        subject:'Here\'s your OTP for goggle forms clone 2 factor authentication',
        text:'OTP: '+message
    }
    try{
        await connectors.transporter.sendMail(mailOptions)
        return "OTP sent to: "+email;
    }catch(err){
        console.log(err);
        return err;
    }
}
exports.sendEmail=sendEmail