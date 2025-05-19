import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

// Set Ejs as the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    const username = "Vishnu TU";
    res.render('index', {username});
}
);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);