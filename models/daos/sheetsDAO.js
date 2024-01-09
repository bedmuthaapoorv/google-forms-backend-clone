// googleSheetsService.js

const { google } = require('googleapis');
const sheets = google.sheets('v4');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function getAuthToken() {
  const auth = new google.auth.GoogleAuth({
    scopes: SCOPES
  });
  const authToken = await auth.getClient();
  return authToken;
}

async function getSpreadSheet({spreadsheetId, auth}) {
  const res = await sheets.spreadsheets.get({
    spreadsheetId,
    auth,
  });
  return res;
}

async function getSpreadSheetValues({spreadsheetId, auth, sheetName}) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    auth,
    range: sheetName
  });
  return res;
}

async function writeSpreadSheetValues({ spreadsheetId, auth, sheetName, resource }) {
    const res = await sheets.spreadsheets.values.update({
        spreadsheetId,
        auth,
        range: sheetName,
        resource,
        valueInputOption:"USER_ENTERED"
    });
    return res;
}

async function clearSpreadSheetValues({ spreadsheetId, auth, sheetName }) {
    const res = await sheets.spreadsheets.values.clear({
        spreadsheetId,
        auth,
        range: sheetName
    });
    return res;
}

module.exports = {
  getAuthToken,
  getSpreadSheet,
  getSpreadSheetValues,
  writeSpreadSheetValues,
  clearSpreadSheetValues
}