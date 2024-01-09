// function: generate OTP for 2FA
'use strict'

let cnt=0;
let generateOTPService=()=>{
    console.log("generating OTP");
    cnt++;
    return cnt;
}
exports.generateOTPService=generateOTPService

