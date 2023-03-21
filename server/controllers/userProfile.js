import { token } from "morgan"
import User from "../models/user.js"
export default async function UserUpdateProfile(req, res) { 
  const id = req.params.id

  const user = await User.findByIdAndUpdate(id)
   if (user) { 
     user.name = req.body.name || user.name;
     user.email = req.body.email || user.email;
     user.username = req.body.username || user.username;
     user.favorites =req.body.favorites || user.favorites
      
   }
  return res.json(user)
}