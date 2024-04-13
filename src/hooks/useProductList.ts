import { useRecoilState } from "recoil";
import fetchSelectProductList from "../apis/fetchSelectProductList";
import { productListState } from "../recoil/atoms/productListState";
import { ProductList } from "../types/products";
import { useEffect } from "react";

interface UseProductList {
  productList: ProductList;
}

const useProductList = (): UseProductList => {
  const [productList, setProductList] = useRecoilState(productListState);

  useEffect(() => {
    //초기 랜더링 시 검색 결과를 저장
    const updateProductList = async () => {
      const data = await fetchSelectProductList({});
      if (data) {
        setProductList(data);
      }
    };

    updateProductList();
  }, [setProductList]);

  return { productList };
};

export default useProductList;
