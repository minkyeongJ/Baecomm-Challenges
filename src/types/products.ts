export type ProductItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductList = {
  products: ProductItem[];
  total: number;
  skip: number;
  limit: number;
};

export type ProductListLoader = {
  loaderProducts: ProductList;
  query: string;
};
