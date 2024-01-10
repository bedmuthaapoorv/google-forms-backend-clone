// function: all DB interactions

const connectors=require('../connectors')
const conn=connectors.accountDBconn
const bcrypt=require('bcryptjs')

async function getAllUsers(){
    console.log('getting list of users')
    let response='ok'
    const query='select * from users';
    try{
        response=await conn.query(query);
        return response;
    }catch(err){
        return err["detail"];
    };
}

async function addNewUser(username, password, contact, email, type){
    console.log('adding new user')
    const query="insert into users(username, password, contact, email, type) values('"+username+"','"+password+"','"+contact+"','"+email+"', '"+type+"')";
    let response='ok'
    try{
        response=await conn.query(query);
        return "account added";
    }catch(err){
        return err;
    };
}

async function authenticate(username, password){
    console.log('authenticating user: '+username)
    const query="select password from users where username='"+username+"' LIMIT 1";
    let response='ok'
    try{
        response=await conn.query(query);
        //console.log(response.rows);
        const hashedPassword=response.rows[0].password;
        return await bcrypt.compare(password, hashedPassword);
    }catch(err){
        return err;
    };
}

async function getPhoneNumber(username){
    console.log('fetching phone number for:'+username)
    const query="select contact from users where username='"+username+"' LIMIT 1";
    let response='ok'
    try{
        response=await conn.query(query);
        return response.rows[0].contact;
    }catch(err){
        throw err;
    };
}

async function getEmail(username){
    console.log('fetching email for:'+username)
    const query="select email from users where username='"+username+"' LIMIT 1";
    let response='ok'
    try{
        response=await conn.query(query);
        return response.rows[0].email;
    }catch(err){
        throw err;
    };
}

exports.getAllUsers=getAllUsers
exports.addNewUser=addNewUser
exports.authenticate=authenticate
exports.getPhoneNumber=getPhoneNumber
exports.getEmail=getEmail