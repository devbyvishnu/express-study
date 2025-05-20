import mongoose from 'mongoose';

const connectDB = async () => {
    const MONGO_URL = 'Enter mongoDB URL here';

 await mongoose.connect(MONGO_URL).then(() => {
    console.log('MongoDB connected');
}
).catch((err) => {
    console.error('MongoDB connection error:', err);
}
);
}
export default connectDB;
