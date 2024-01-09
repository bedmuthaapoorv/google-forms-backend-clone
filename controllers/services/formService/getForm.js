const DAO=require('../../../models/daos');

async function getForm(req, res){
    let formID=req.body["formID"]
    res.send(await DAO.formsDAO.getForm(formID))
}

exports.getFormService=getForm;