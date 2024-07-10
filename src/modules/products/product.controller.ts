import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import catchAsync from "../../utils/catchAsync";


const createProduct = catchAsync(async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductServices.createProductIntoDB(productData);

  res.json({
    success: true,
    message: "Product is created successfully !",
    data: result,
  });
});


const getProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.getProductsFromDB();

  res.json({
    success: true,
    message: "Products is fetched successfully !",
    data: result,
  });
});

const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const payload = req.body;
  const result = await ProductServices.updateProductIntoDB(productId, payload);

  res.json({
    success: true,
    message: "Products is updated successfully !",
    data: result,
  });
});


const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await ProductServices.deleteProductFromDB(productId);

  res.json({
    success: true,
    message: "Products is deleted successfully !",
    data: result,
  });
});


export const ProductControllers = {
  createProduct,
   getProducts,
   updateProduct,
   deleteProduct
};
