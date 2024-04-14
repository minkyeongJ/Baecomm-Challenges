import { atom } from "recoil";
import { ProductList } from "../../types/products";

export const productListState = atom<ProductList>({
  key: "ProductList",
  default: { products: [], total: 0, skip: 0, limit: 0 },
});
