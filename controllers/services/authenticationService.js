const createAccount=require('./authenticationService/createAccount')
const twoFA=require('./authenticationService/twoFA')
const hashPasswordService=require('./authenticationService/hashPassword');
const generateOTPService=require('./authenticationService/generateOTP')
const validateOTPService=require('./authenticationService/validateOTP')

exports.createAccountService=createAccount.createAccountService;
exports.twoFAService=twoFA.twoFAService;
exports.hashPasswordService=hashPasswordService.hashPasswordService;
exports.generateOTPService=generateOTPService.generateOTPService;
exports.validateOTPService=validateOTPService.validateOTPService;