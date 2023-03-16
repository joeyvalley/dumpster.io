export const productSchema = new mongoose.Schema({
  title: String,
  author: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  },
  description: String,
  tags: [],
  img: String,
  location: {
    latitude: Number,
    longitude: Number
  },
  dateUploaded: String
})