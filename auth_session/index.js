import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

const user = [];

app.get('/', (req, res) => {   
    res.send('Hello World!');
}
);

app.post('/register', (req,res)=>{
   try {
    const {userName, password} = req.body;
    user.push({userName, password});
    res.status(201).json({message: 'User registered successfully'});
   } catch (error) {
     console.error(error.message);
        res.status(500).json({message: 'Internal server error'});
   }
})

app.post('/login', (req,res)=>{
    const {userName, password} = req.body;
    
    const foundUser = user.find(user => user.userName === userName && user.password === password);
    if(foundUser){
        req.session.user = foundUser;
        res.status(200).json({message: 'Login successful'});
    } else {
        res.status(401).json({message: 'Invalid credentials'});
    }
})

app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.status(200).json({message: 'Welcome to the dashboard', user: req.session.user});
    } else {
        res.status(401).json({message: 'Unauthorized access'});
    }
}
);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);