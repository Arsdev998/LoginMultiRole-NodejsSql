import express from "express";
import {
  getProducts,
  getProductsbyId,
  createProduct,
  updateProducts,
  deleteProducts,
} from "../controller/Products.js";
import {verifyUser} from '../middleware/AuthUser.js'

const router = express.Router();


router.get('/products',verifyUser,getProducts)
router.get('/products/:id',verifyUser,getProductsbyId)
router.post('/products',verifyUser,createProduct)
router.patch('/products/:id',verifyUser,updateProducts)
router.delete('/products/:id',verifyUser,deleteProducts)

export default router;
