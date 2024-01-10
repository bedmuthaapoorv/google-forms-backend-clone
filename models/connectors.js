const Pool = require('pg').Pool
const accountDBconn=new Pool({
    user: 'postgres',
    host: 'db',
    password: 'root',
    database: 'accountdb',
    port: '5432'
})

const responderDBconn=new Pool({
    user: 'postgres',
    host: 'db',
    password: 'root',
    database: 'responderdb',
    port: '5432'
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bedmuthaapoorv:apoorv@cluster0.kelbc2p.mongodb.net/?retryWrites=true&w=majority";

const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


let nodemailer = require('nodemailer')
let transporter=nodemailer.createTransport({
  service:'gmail',
  auth:{
    user: 'bedmuthaapoorv@gmail.com',
    pass:'zgwj bhdc dxry dgiw'
  }
})

const redis=require('redis')
const redisClient=redis.createClient({
  url: 'redis://redis:6379'
});

exports.mongoClient=mongoClient;
exports.accountDBconn=accountDBconn;
exports.responderDBconn=responderDBconn;
exports.transporter=transporter;
exports.redisClient=redisClient;