import { atom } from "recoil";
import { ProductItem } from "../../types/products";

export const productDetailState = atom<ProductItem>({
  key: "ProductItem",
  default: {} as ProductItem,
});
