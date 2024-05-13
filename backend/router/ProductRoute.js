import express from "express";
import {
  getProducts,
  getProductsbyId,
  createProduct,
  updateProducts,
  deleteProducts,
} from "../controller/Products.js";

const router = express.Router();


router.get('/products',getProducts)
router.get('/products/:id',getProductsbyId)
router.post('/products',createProduct)
router.patch('/products/:id',updateProducts)
router.delete('/products/:id',deleteProducts)

export default router;
