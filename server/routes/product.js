import { Router } from 'express'
import * as controllers from '../controllers/product.js'


const router = Router()

router.post('/createProduct', controllers.createProduct)






export default router
