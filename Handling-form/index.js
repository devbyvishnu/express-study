import express from 'express';
import multer from 'multer';
import storage from './config/multer.js';

const app = express(); // lowercase 'app' is conventional
const upload = multer( { storage: storage, // corrected 'strorage' to 'storage'
     limits: { fileSize: 1024000 }, // 1MB limit
}); // corrected 'strorage' to 'storage'

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(upload.single('image')); // Use multer to handle multipart/form-data

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.post('/form', (req, res) => { // corrected '/from' to '/form' (if intended)
    console.log(req.body);
    console.log(req.file); // Log the file information
    res.send('Form submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
