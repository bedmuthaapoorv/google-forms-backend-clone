const { response } = require('express');
const connectors=require('../dbconnectors')

async function storeResponse(data){
    let client=connectors.mongoClient;
    try {
        await client.connect();
        let db = await client.db("formsdb");
        let responses = await db.collection("responses");
        output = await responses.insertOne(data);
        console.log(output)
        await client.close();
        return output
    }catch(err){
        await client.close();
        return err;
    }
}

async function getResponses(responseIds){
    return await Promise.all(responseIds.map(async (id)=>{
        return await getResponse(id["responseid"]);
    }))
}

async function getResponse(id){
    let client=connectors.mongoClient;
    try{
        await client.connect();
        let db = client.db("formsdb");
        let responses = db.collection("responses");
        let data=await responses.find({"responseID": id}).toArray()
        //console.log(data) 
        return data;
    }catch(err){
        return err;
    }finally{
        await client.close();
    }
}

exports.storeResponse=storeResponse
exports.getResponses=getResponses