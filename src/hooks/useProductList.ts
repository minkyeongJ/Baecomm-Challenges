import React, { useEffect } from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { useRecoilState } from "recoil";
import fetchSelectProductList from "../apis/fetchSelectProductList";
import { PRODUCT_LIMIT } from "../helper/constants/products";
import { productListState } from "../recoil/atoms/productListState";
import { searchState } from "../recoil/atoms/searchState";
import { ProductList, ProductListLoader } from "../types/products";

//검색을 위한 로더 함수
export const loader: LoaderFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("search") || "";
  const loaderProducts = await fetchSelectProductList({
    query,
    limit: PRODUCT_LIMIT,
  });

  return { loaderProducts, query };
};
interface UseProductList {
  productList: ProductList;
  searchQuery: string;
  isMore: boolean;
  getMoreProduct: (e: React.MouseEvent) => void;
}

const useProductList = (): UseProductList => {
  const { loaderProducts, query } = useLoaderData() as ProductListLoader;
  const [productList, setProductList] = useRecoilState(productListState);
  const [searchQuery, setSearchQuery] = useRecoilState(searchState);

  useEffect(() => {
    //productList atom에 data 저장
    if (loaderProducts) {
      setProductList(loaderProducts);
    }
    //searchQuery atom에 data 저장
    if (query) {
      setSearchQuery(query);
    }
  }, [loaderProducts, query, setProductList, setSearchQuery]);

  //더보기 버튼 노출 여부
  const isMore = productList.total - productList.products.length > 0;

  //더보기 버튼 클릭 시 상품을 더 가져오게 하는 함수
  const getMoreProduct = async (e: React.MouseEvent) => {
    e.preventDefault();
    const newProductList = await fetchSelectProductList({
      query: searchQuery,
      limit: PRODUCT_LIMIT,
      skip: productList?.products?.length,
    });

    if (newProductList) {
      setProductList({
        products: [...productList.products, ...newProductList.products],
        total: newProductList.total,
        skip: newProductList.skip,
        limit: newProductList.limit,
      });
    }
  };

  return { productList, searchQuery, isMore, getMoreProduct };
};

export default useProductList;
