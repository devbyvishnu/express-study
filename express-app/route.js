import express from 'express';
import { userLogin, userSignin } from './controller';

const route = express.Router();

// Define The Route
route.get("/login",userLogin);
route.get("/signin",userSignin);

export default route;