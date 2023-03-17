import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Router } from "express";
import * as controllers from "../controllers/auth.js";

const TOKEN_KEY = process.env.TOKEN_KEY

const router = Router()

router.post('/signup', controllers.Signup)
router.post('/signin', controllers.Sign_in)

export default router