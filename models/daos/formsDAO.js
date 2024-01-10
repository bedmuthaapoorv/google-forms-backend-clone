const connectors=require('../connectors')

async function createForm(formsData) {
    let client=connectors.mongoClient;
    try {
        await client.connect();
        let db = await client.db("formsdb");
        let forms = await db.collection("forms");
        let data = await forms.insertOne(formsData);
        console.log(data)
        await client.close();
        return "form created"
    }catch(err){
        await client.close();
        return "form not created"
    }
}

async function getForm(formID){
    let client=connectors.mongoClient;
    try{
        await client.connect();
        let db = await client.db("formsdb");
        let forms = await db.collection("forms");
        let data=await forms.findOne({'formID': formID})
        await client.close();
        return data;
    }catch(err){
        await client.close();
        return err;
    }
}

exports.createForm=createForm
exports.getForm=getForm
