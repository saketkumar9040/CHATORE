
const bodyParser = require('body-parser');
const express =require('express');
const connectDb = require('./config/db');
const chats=require('./data/data');
const app=express();
const colors=require('colors');
require('dotenv').config();

// DATABASE CONNECTION
connectDb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/chats",(req,res)=>{
    res.send(chats); 
});

app.listen(process.env.PORT,()=>{
    console.log(`server listening to ${process.env.PORT}`.yellow.bold);
});