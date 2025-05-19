import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.post('/users', (req, res) => {
     const {name, email} = req.body;
     if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
     }  else {
        return res.status(201).json({ message: `User name is ${name} with email is ${email}` });
     }
});

app.put('/users/:id', (req,res)=> {
    const { id } = req.params;
    const { name , email} = req.body;

    res.send(`User with id ${id} updated with name ${name} and email ${email}`);
})

app.delete('/users/:id', (req, res) => {
    const userId  = req.params.id
    res.send(`User with name ${userId} deleted`);
}
); 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});