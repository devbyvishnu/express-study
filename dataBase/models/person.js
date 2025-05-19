import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    myOrder: {
        type: Object,
        default: {},
    },
    
},{timestamps: true,minimize: false});

export const Person = mongoose.model("Person", personSchema);