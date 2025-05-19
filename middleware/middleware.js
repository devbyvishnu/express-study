import express from 'express';

const app = express();


app.use((req,res,next)=>{
    console.log("Start");

    res.on('finish', () => {
        console.log("End");
    }
    );
    next();
})

app.get('/', (req, res) => {
    console.log("Middle");
    res.send('Hello, World!!');
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });