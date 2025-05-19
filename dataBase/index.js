import express from 'express';
import connectDB  from './config/db.js';
import { Person } from './models/person.js';

const app = express();
const PORT = process.env.PORT || 3000;

await connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use(express.json());

// Saving Data to MongoDB

app.post('/person', async (req, res) => {
    
   try {
    res.send('Person data received');

    const { name, age, email } = req.body;
    const newPerson = Person({
       name,
       age,
       email
    })
    
    await newPerson.save()
    console.log(newPerson);
    
   } catch (error) {

    console.log(error.message);
    
   }

}
);

// Updating Data in MongoDB

app.put('/person', async (req, res) => {


    const { email } = req.body;
    
    const personData = await Person.find({email: email});

    personData[0].age = 100;

    await personData[0].save();

    console.log(personData[0]);

    res.send('Person data Got');

}
);

// Deleting Data in MongoDB

app.delete('/person/:id', async (req, res) => {
    const { id } = req.params;
    const personData = await Person.findByIdAndDelete(id);
    console.log(personData);
    res.send('Person data deleted');
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });