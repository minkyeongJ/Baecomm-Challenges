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

  useEffect(() => {
    // 컴포넌트 마운트 시 스크롤 위치 최상단으로 이동
    window.scrollTo(0, 0);
  }, []);

  return { productDetail };
};

export default useProductDetail;
