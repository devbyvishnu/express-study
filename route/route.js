import express from "express";
import { userLogin, userSignin, userVerify, useError } from "./controller.js";

const router = express.Router();

router.get("/login", userLogin);
router.get("/signin", userSignin);
router.get("/verify", userVerify );
router.get('*',useError)



export default router;
