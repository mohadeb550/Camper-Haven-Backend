import { TProduct } from "./product.interface";
import { Product } from "./product.model";


const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getProductsFromDB = async () => {
  const result = await Product.find({})
  return result;
};

const updateProductIntoDB = async (productId: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(productId, payload)
  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId)
  return result;
};


export const ProductServices = {
  createProductIntoDB,
  getProductsFromDB,
  updateProductIntoDB,
  deleteProductFromDB
};

