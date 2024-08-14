const  express = require("express");

const  app = express();

const port = process.env.PORT ||8999;
app.get('/',(req,res)=>{
    res.send("home route")
})

app.listen(port ,()=>{
    try{
        console.log(`server is running at http://localhost:${port}`)
    }catch(err){
        console.log(err);
    }
})