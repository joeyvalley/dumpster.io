import { token } from "morgan"
import jwt from "jsonwebtoken"
import User from "../models/user.js"
export default async function UserUpdateProfile(req, res) { 
  const id = req.params.id
  let decode = jwt.decode(id)
  let decodeId = decode.id

  const user = await User.findByIdAndUpdate(decodeId)
   if (user) { 
     user.name = req.body.name || user.name;
     user.email = req.body.email || user.email;
     user.username = req.body.username || user.username;
     user.favorites =req.body.favorites || user.favorites
      
   }
  console.log(user)
  return res.json(user)
}