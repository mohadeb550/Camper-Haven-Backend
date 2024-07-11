
export type TProduct = {
  _id? : string,
  product_name : string,
  category : string,
  stock_quantity : number,
  price : number,
  description : string,
  rating : number,
  images : string[];
  createdAt? : string,
  updatedAt? : string,
};


export type TProductsQuery = {
  searchValue?: string,
    category?: string,
    priceRange?: string,
    sortByPrice?: string
}