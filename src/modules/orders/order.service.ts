import AppError from "../../errors/AppError";
import { TProduct } from "../products/product.interface";
import { Product } from "../products/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";


const createOrderIntoDB = async (order: TOrder) => {
  const orderedProducts = order.orderedProducts;

  // create a new order 
  const result = await Order.create(order)

  if(result){
    //  update the stock quantity 
  for (const item of orderedProducts) { 
    const product: TProduct | null  = await Product.findById(item.productId);
    if (product) {
      product.stock_quantity -= item.quantity;
      await Product.findByIdAndUpdate(product._id, product, { new : true })
    } else {
     new AppError(404, 'Product not found')
    }
  }
  }
  return result;
};


export const OrderServices = {
  createOrderIntoDB,
};
