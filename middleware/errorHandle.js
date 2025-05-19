import express from 'express';

const app = express();


app.get('/', (req, res) => {
    throw new Error('Something went wrong!');
});

app.use((err,req,res,next)=>{
    console.error(err.message);
    res.send('Internal Server Error');
})
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });