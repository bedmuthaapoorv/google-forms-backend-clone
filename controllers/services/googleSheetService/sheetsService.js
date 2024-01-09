const {
    getAuthToken,
    getSpreadSheet,
    getSpreadSheetValues,
    writeSpreadSheetValues,
    clearSpreadSheetValues
} = require('../../../models/daos/sheetsDAO');

// const spreadsheetId = process.argv[2];
// const sheetName = process.argv[3];

async function testGetSpreadSheet() {
    try {
        const auth = await getAuthToken();
        const response = await getSpreadSheet({
            spreadsheetId,
            auth
        })
        console.log('output for getSpreadSheet', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.log(error.message, error.stack);
    }
}

async function testGetSpreadSheetValues() {
    try {
        const auth = await getAuthToken();
        const response = await getSpreadSheetValues({
            spreadsheetId,
            sheetName,
            auth
        })
        console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.log(error.message, error.stack);
    }
}

async function updateSheet(values, spreadsheetId, sheetName) {
    try {
        const auth = await getAuthToken();
        const resource = {
            values,
        };

        const response = await writeSpreadSheetValues({
            spreadsheetId,
            auth,
            sheetName,
            resource
        })

        console.log('output for writeSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.log(error.message, error.stack);
    }
}

async function clearSheet(spreadsheetId, sheetName) {
    try {
        const auth = await getAuthToken();
        const response = await clearSpreadSheetValues({
            spreadsheetId,
            auth,
            sheetName
        })

        console.log('output for clearSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.log(error.message, error.stack);
    }
}

exports.clearSheet=clearSheet;
exports.updateSheet=updateSheet;