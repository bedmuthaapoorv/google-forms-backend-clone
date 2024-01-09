// function: to export api endpoints

'use strict'

const authenticationService=require('./services/authenticationService');
const formService=require('./services/formService');
const responseService=require('./services/responseService');
const googleSheetService=require('./services/googleSheetService');

exports.authenticationService=authenticationService;
exports.formService=formService;
exports.responseService=responseService;
exports.googleSheetService=googleSheetService;