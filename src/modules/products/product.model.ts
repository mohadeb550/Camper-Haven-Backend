
import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
  product_name : {
    type : String,
    required : true,
  },
  category : {
    type : String,
    required : true,
  },
  stock_quantity : {
    type : Number,
    required : true,
  },
  price : {
    type : Number,
    required : true,
  },
  description : {
    type : String,
    required : true,
  },
  rating : {
    type : Number,
    required : true,
  },
  images : {
    type : [String],
    required : true,
  }
}, {
  timestamps : true
});

export const Product = model<TProduct>("Product", productSchema);
