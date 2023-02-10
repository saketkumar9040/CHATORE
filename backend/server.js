const bodyParser = require('body-parser');
const express =require('express');
const chats=require('./data/data')
const app=express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/api/chats",(req,res)=>{
    res.send(chats);
    
});


app.listen(process.env.PORT,()=>{
    console.log(`server listening to ${process.env.PORT}`);
});