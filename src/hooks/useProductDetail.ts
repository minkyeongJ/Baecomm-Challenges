import { LoaderFunction, useLoaderData } from "react-router-dom";
import fetchSelectProductItem from "../apis/fetchSelectProductItem";
import { useEffect } from "react";
import { ProductDetailLoader, ProductItem } from "../types/products";
import { useRecoilState } from "recoil";
import { productDetailState } from "../recoil/atoms/productDetailState";

//상품 상세 정보를 위한 로더 함수
export const loader: LoaderFunction = async ({ params: { productId } }) => {
  const loaderProductItem = await fetchSelectProductItem({ productId });
  return { loaderProductItem };
};

//thumbnail image, brand, title, price, description과 images 배열의 각 image
interface UseProductDetail {
  productDetail: ProductItem;
}

const useProductDetail = (): UseProductDetail => {
  const { loaderProductItem } = useLoaderData() as ProductDetailLoader;
  const [productDetail, setProductDetail] = useRecoilState(productDetailState);

  useEffect(() => {
    if (loaderProductItem) {
      setProductDetail(loaderProductItem);
    }
  }, [loaderProductItem, setProductDetail]);

  return { productDetail };
};

export default useProductDetail;
