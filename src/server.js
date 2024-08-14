const  express = require("express");
const connectToDB = require("./config/db");
require('dotenv').config();

const  app = express();
const db_url = process.env.DB_URL;

const port = process.env.PORT ||8999;

app.get('/',(req,res)=>{
    res.send("home route")
})

app.listen(port ,async()=>{
    try{
        await connectToDB(db_url);
        console.log("we are successfully connected to database")
        console.log(`server is running at http://localhost:${port}`)
    }catch(err){
        console.log(err);
    }
})