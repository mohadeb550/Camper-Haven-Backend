import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/products/product.route";
import globalErrorHandler from "./middleware/globalErrorhandler";

const app = express();

//parsers
app.use(cors());
app.use(express.json());

app.use(ProductRoutes);
app.use(globalErrorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next");
});

app.all('*',(req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    success: false,
    message: 'API Not Found !!',
    error: '',
  });
})

export default app;
