import express from 'express';


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
}
);

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
}
);


//error handling synchronous
app.get('/error', (req, res) => {
    throw new Error('This is a synchronous error');
}
);
//error handling asynchronous
app.get('/async-error', async (req, res, next) => {
    try {
        await Promise.reject(new Error('This is an asynchronous error'));
    } catch (error) {
        next(error);
    }
}
);
//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}
);

app.listen(PORT, () => {   
    console.log(`Server is running on port ${PORT}`);
}
);