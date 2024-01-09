// function: to build a server & relay the requests further
require("dotenv").config();
const express=require('express');
const app=express();
app.use(express.json());
const port=process.env.PORT || 3000;
const routes=require('./routes')
routes.routes(app)
app.listen(port, console.log("App is working at: "+port));
