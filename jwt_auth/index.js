import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from  "bcryptjs";

const app = express();
const PORT = process.env.PORT || 3000;

const user = [];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.post('/register', async (req, res) => {
   try {
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // Store username and hashed password in the database

    user.push({
        username,
        password: hashedPassword
    })

    res.send('User registered successfully');
    
   } catch (error) {
     console.error(error.message);
     res.send(error.message);
   }
    
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userFound = user.find(user => user.username === username);
    if (!userFound || !(await bcrypt.compare(password, userFound.password))){
        return res.status(401).send('Invalid username or password');
    } else {
        const token = jwt.sign({username}, 'test#secret');
        res.json({token});
    }
}
);

app.get('/dashboard', (req,res) => {
    const token = req.headers['authorization'];
    const decodedToken = jwt.verify(token, 'test#secret');
    if(decodedToken.username){
        res.send(`Welcome to the dashboard, ${decodedToken.username}`);
    } else {
        res.status(401).send('Unauthorized');
    }
}
);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);
