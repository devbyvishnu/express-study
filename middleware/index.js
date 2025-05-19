import express from 'express';

const app = express();

// app.use((req,res,next)=>{
//     console.log("Request received"+Date.now());
//     next();
// })

// Single Route Middleware

app.use('/user', (req, res, next) => {
    console.log("User route accessed");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, World!!');
});

app.get('/user', (req, res) => {
    res.send('User route');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });