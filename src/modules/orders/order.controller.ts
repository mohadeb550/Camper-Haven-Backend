import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { OrderServices } from "./order.service";


const createOrder = catchAsync(async (req: Request, res: Response) => {
  const orderData = req.body;
  const result = await OrderServices.createOrderIntoDB(orderData);

  res.json({
    success: true,
    message: "Order is created successfully !",
    data: result,
  });
});


export const OrderControllers = {
  createOrder,
};
