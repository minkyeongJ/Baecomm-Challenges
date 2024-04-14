import { atom } from "recoil";
import { ProductItem } from "../../helper/types/products";

export const productDetailState = atom<ProductItem>({
  key: "ProductItem",
  default: {} as ProductItem,
});
