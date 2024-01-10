const sendSMS=require('./communicationService/sendSMS')
const sendEmail=require('./communicationService/sendEmail')

exports.sendSMS=sendSMS.sendSMS
exports.sendEmail=sendEmail.sendEmail