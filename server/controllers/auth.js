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


export async function Signup(req, res) {
  let { username, password } = req.body
  let hash = await bcrypt.hash(password, 5)
  let user = await User.create({
    username,
    hash
  })
  
  const data = {
    id: user._id,
    exp: getExpiration()
  }
  const token = jwt.sign(data, TOKEN_KEY)
  return res.json(token)
}

export async function Sign_in(req, res) { 
  let { username, password } = req.body
  let user = await User.findOne({ username })
  
  let hash = user.hash
  const result = await bcrypt.compare(password, hash)
  if (result) {
    let data = {
      id: user._id,
      exp: getExpiration()
    }
    let token = jwt.sign(data, TOKEN_KEY)
    return res.json(token)
  } else { 
    return res.status(418).json({
      message: 'you are a tea pot, we only like coffee'
    })
  }
}