import express from "express";
import { ProductControllers } from "./product.controller";
const router = express.Router();


router.post("/create-product", ProductControllers.createProduct);
router.get("/products", ProductControllers.getProducts);
router.get("/products/:productId", ProductControllers.getSingleProduct);
router.patch("/products/:productId", ProductControllers.updateProduct);
router.delete("/products/:productId", ProductControllers.deleteProduct);



export const ProductRoutes = router;
