let DAO=require('../../../models/daos')
async function storeResponse(req, res){
    let data=req.body
    let responseStorageResult=await DAO.responseDAO.storeResponse(data);
    console.log(responseStorageResult)
    res.send(await DAO.responderDAO.storeResponseFormMapping(data["responseID"], data["formID"], data["responderID"]))
}

exports.storeResponse=storeResponse;