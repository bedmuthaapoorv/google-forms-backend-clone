const DAO=require("../../../models/daos")
const googleSheetsService=require("../googleSheetService");
async function exportToSheetService(req, res){
    let formID=req.body["formID"]
    let spreadsheetId=req.body["spreadsheetId"]
    let sheetName=req.body["sheetName"]
    // get response Ids
    let responseIDs=await DAO.responderDAO.getResponses(formID);
    // console.log(responseIDs["rows"]);
    // get responses
    let responses=await DAO.responseDAO.getResponses(responseIDs["rows"])
    // get form
    let form=await DAO.formsDAO.getForm(formID);
    let values=googleSheetsService.responseToArrayService(responses, form)
    // clear existing sheet
    await googleSheetsService.sheetsService.clearSheet(spreadsheetId, sheetName)
    // update sheet
    await googleSheetsService.sheetsService.updateSheet(values, spreadsheetId, sheetName)
    res.send("your data is exported to, please clone https://docs.google.com/spreadsheets/d/1iML5jv5F74GdTbgFFx2el0-cR2fbM0sLWHXizdb2Uok/edit?usp=sharing")
}
exports.exportToSheetService=exportToSheetService;