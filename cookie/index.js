import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());


app.get('/', (req, res) => {

    res.cookie('name', 'Hello-express');
    res.send('Hello, World!');
}
);

app.get('/fetch', (req, res) => {
       
      console.log(req.cookies);
      res.send("API called");
    }

);

app.get('/delete', (req, res) => {
    res.clearCookie('name');
    res.send('Cookie deleted');
}
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });