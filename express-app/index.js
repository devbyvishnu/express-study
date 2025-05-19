import express from 'express';
import route from './route.js';
const app = express();

const PORT = 3000;

// Define The Route

app.get("/",(req,res)=> {
    res.send("Hello express")
})

// app.get("/about",(req,res)=> {
//     res.send("About Page")
// })

// app.get("/contact",(req,res)=> {
//     res.send("Contact Page")
// })

// Dynamic Routing http://localhost:3000/user/name

// app.get("/user/:name",(req,res)=> {
//     const name = req.params.name;
//     res.send(`Hello ${name}`)
// })

// search?keyword=value

// app.get("/search",(req,res)=>{
//     const keyword = req.query.keyword;
//     res.send(`Search result for ${keyword}`)
// })


// app.get("/user/:name",userNamecontroller);

// search?keyword=value

// app.get("/search",searchController) ;


app.use("/user",route)


app.listen(PORT,()=>{
    console.log(`Server running on http://localhost;${PORT}`)
})