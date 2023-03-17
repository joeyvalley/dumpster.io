import bcrypt from 'bcrypt'
import { getRandomValues } from 'crypto'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const TOKEN_KEY = process.env.TOKEN_KEY

function getExpiration() {
  const d = new Date()
  d.setMinutes(d.getMinutes() + 30)
  return d.getTime()
}


export default async function Authenticator(req,res) { 
  let { username, password } = req.body
  let hash = await bcrypt.hash(password, 5)
  let user = await User.create({
    username,
    hash
  })
  
  const data = {
    id: user_id,
    exp: getExpiration()
  }
  const token = jwt.sign(data, TOKEN_KEY)
  return res.json(token)
}