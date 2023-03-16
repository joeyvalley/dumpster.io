import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  username: String,
  hash: String,
  posts: []
})

export default mongoose.model('User', userSchema)
