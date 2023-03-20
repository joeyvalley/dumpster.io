import Product from '../models/products.js'
import User from '../models/user.js'

export default async function showProducts(req, res) {
  let allProducts = Product.find({})
  return res.json(allProducts)
}


export async function createProduct(req, res) { 

  const { title, author, description } = req.body
  
  if (!title || !author || !description) {
    res.status(418).json(JSON.stringify(author))
  } else { 
    Product.create(req.body)
  }
}

