import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

app.get('/', (req, res) => {
     if(req.session.page_views){
        req.session.page_views++;
        res.send(`You have visited this page ${req.session.page_views} times`);
     } else {
        req.session.page_views = 1;
        res.send('Welcome to the page! You have visited this page 1 time');
     }
});

app.get('/remove',(req,res)=>{
    req.session.destroy((err) => {
        if(err){
            return res.redirect('/');
        }
        res.send('Session destroyed');
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
