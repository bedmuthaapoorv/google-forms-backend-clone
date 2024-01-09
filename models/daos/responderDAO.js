let connector=require('../dbconnectors')

async function storeResponseFormMapping(responseID, formID, responderID){
    console.log('adding new response-form mapping')
    let conn=connector.responderDBconn
    const query="insert into responses(responseid, formid, responderid) values('"+responseID+"','"+formID+"','"+responderID+"')";
    try{
        let data=await conn.query(query);
        return "response recorded";
    }catch(err){
        return err;
    };
}

async function getResponses(formID){
    console.log('fetching responses for form: '+formID)
    let conn=connector.responderDBconn
    const query="select responseid from responses where formid='"+formID+"'";
    try{
        let data=await conn.query(query);
        return data;
    }catch(err){
        return "err occured try again";
    };
}

exports.storeResponseFormMapping=storeResponseFormMapping;
exports.getResponses=getResponses;