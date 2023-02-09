const bodyParser = require('body-parser');
const express =require('express');
const app=express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.listen(process.env.PORT,()=>{
    console.log(`server listening to ${process.env.PORT}`)
});