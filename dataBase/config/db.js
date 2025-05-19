import mongoose from 'mongoose';

const connectDB = async () => {
    const MONGO_URL = 'mongodb+srv://vishnu:vishnu5739@cluster0.w7l7dlz.mongodb.net/express'

 await mongoose.connect(MONGO_URL).then(() => {
    console.log('MongoDB connected');
}
).catch((err) => {
    console.error('MongoDB connection error:', err);
}
);
}
export default connectDB;
