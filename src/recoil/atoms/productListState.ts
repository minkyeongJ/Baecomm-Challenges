import { atom } from "recoil";
import { ProductList } from "../../types/products";

export const productListState = atom<ProductList>({
  key: "productListState",
  default: {} as ProductList,
});
