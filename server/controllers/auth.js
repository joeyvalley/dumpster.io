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

export async function Sign_in(req, res) {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (!user) {
    return res.json({
      isUser: false
    })
  }
  const hash = user.hash
  const result = await bcrypt.compare(password, hash)
  if (result) {
    const data = {
      id: user._id,
      exp: getExpiration()
    }
    const token = jwt.sign(data, TOKEN_KEY)
    return res.json(token)
  } else {
    return res.status(418).json({
      message: 'Something went wrong.'
    })
  }
}

export async function Signup(req, res) {
  const { username, password } = req.body

  // Check if the username is taken.
  const isUser = await User.findOne({ username })
  if (isUser) {
    return res.json({ usernameExists: true })
  } else {
    const hash = await bcrypt.hash(password, 5)
    const user = await User.create({ username, hash })
    const data = {
      id: user._id,
      exp: getExpiration()
    }
    const token = jwt.sign(data, TOKEN_KEY)
    return res.json(token)
  }
}