import mongoose from './connection.js'
import data from './items.json'  assert { type: "json" }
import Product from '../models/products.js'

await Product.deleteMany();
await Product.insertMany(data);
