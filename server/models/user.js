import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
  },
  hash: String,
  posts: []
})

export default mongoose.model('User', userSchema)
