const express = require("express");
const app = express();

app.listen(8000, ()=> {console.log("running port 8000")}
)

app.get("/student",(req,res) => {
    res.send(req.query)
})

