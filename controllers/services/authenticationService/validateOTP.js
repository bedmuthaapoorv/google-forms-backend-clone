'use strict'

const connectors=require('../../../models/connectors')
const validateOTPService=async (req, res)=>{
    const username=req.body["username"]
    const otp=req.body["otp"]
    const redisClient=connectors.redisClient;
    await redisClient.connect();
    const output=otp==(await redisClient.get(username));
    await redisClient.disconnect();
    res.send({
        'output': output
    });
}

exports.validateOTPService=validateOTPService;