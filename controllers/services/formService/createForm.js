// function: send response for account creation
'use strict'

const DAO=require('../../../models/daos');
let createFormService=async (req, res)=>{
    let formData=req.body
    res.send(await DAO.formsDAO.createForm(formData))
}
exports.createFormService=createFormService

