import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Router } from "express";


import User from '../models/user.js'

const TOKEN_KEY = process.env.TOKEN_KEY

function getExpiration() {
  const d = new Date()
  d.setMinutes(d.getMinutes() + 30)
  return d.getTime()
}

const router = Router()

router.post('/signup', async (req, res) => {
  // handle user input
  const { username, password } = req.body
  console.log(req.body)
  // hash the password
  const hash = await bcrypt.hash(password, 10)
  // create new user
  const user = await User.create({
    username,
    hash,
  })

  const data = {
    id: user._id,
    exp: getExpiration(),
  }

  // sign the jwt
  const token = jwt.sign(data, TOKEN_KEY)

  // return the token
  return res.json(token)
})

export default router