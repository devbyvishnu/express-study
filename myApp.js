const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.listen(8000, ()=> {
    console.log("app rendering port 8000");
    
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", (req,res) => {

    console.log(req.body);
    
    res.json({
        message : "login page rendered",
        receivedData : req.body
    })
    
})