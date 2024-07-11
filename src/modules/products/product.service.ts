import { TProduct, TProductsQuery } from "./product.interface";
import { Product } from "./product.model";


const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getProductsFromDB = async (query: TProductsQuery) => {
  const filter : Record<string ,unknown> = {};


  // Add search value to filter if provided
  if (query.searchValue) {
    filter.$or = [
      { product_name: { $regex: query.searchValue, $options: 'i' } },
      { description: { $regex: query.searchValue, $options: 'i' } }
    ];
  }

  // Add category to filter if provided
  if (query.category) {
    filter.category = query.category;
  }

  // Add price range to filter if provided
  if (query.priceRange) {
    const [startingPrice, endingPrice] = query.priceRange.split('-').map(Number);
    filter.price = { $gte: startingPrice, $lte: endingPrice };
  }

  // Set sort option based on sortByPrice if provided
  const sortOption  = {};
  if (query.sortByPrice) {
    sortOption.price = Number(query.sortByPrice);
  }

  const products = await Product.find(filter).sort(sortOption);
  return products;
};




const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findById(productId)
  return result;
};

const updateProductIntoDB = async (productId: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(productId, payload, {new : true})
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
  deleteProductFromDB,
  getSingleProductFromDB
};

