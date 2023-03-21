import { token } from "morgan"
import jwt from "jsonwebtoken"
import User from "../models/user.js"
import bcrypt from 'bcrypt'


export default async function UserUpdateProfile(req, res) { 
  const id = req.params.id
  const { username, password, name, email, avatar, favorites } = req.body

  let decode = jwt.decode(id)
  let decodeId = decode.id
  let codedPassword = await bcrypt.hash(password,5) 
  const user = await User.findByIdAndUpdate(
    decodeId,
    {
      username: req.body.username || user.username,
      hash: codedPassword || user.hash,
      name: req.body.name || user.name,
      email: req.body.email || user.email,
      avatar: req.body.avatar || user.avatar,
      favorites: req.body.favorites || user.favorites,
    },
    { new: true } // Return the updated document
  )

  await user.save() // Save the updated document to the database

  console.log(req.body)
  console.log(user)
  return res.json(user)
}
