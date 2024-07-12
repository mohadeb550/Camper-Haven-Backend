
import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({

  userName : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true,
  },
  phone : {
    type : String,
    required : true,
  },
  deliveryAddress : {
    type : String,
    required : true,
  },
  paymentMethod : {
    type : String,
    required : true,
  },
  orderedProducts : {
    type : [
      { productId: String, quantity : Number }
    ],
    required : true,
  },
  total : {
    type : Number,
    required : true,
  }
 
}, {
  timestamps : true
});

export const Order = model<TOrder>("Order", orderSchema);
