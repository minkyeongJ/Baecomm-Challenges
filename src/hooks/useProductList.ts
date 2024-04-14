import { throttle } from "./../helper/utils/delay";
import React, { useEffect } from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { useRecoilState } from "recoil";
import fetchSelectProductList from "../apis/fetchSelectProductList";
import { PRODUCT_LIMIT } from "../helper/constants/products";
import { productListState } from "../recoil/atoms/productListState";
import { searchState } from "../recoil/atoms/searchState";
import { ProductList, ProductListLoader } from "../types/products";
import { scrollPositionState } from "../recoil/atoms/scrollPositionState";

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
  handleScroll: () => void;
}

const useProductList = (): UseProductList => {
  const { loaderProducts, query } = useLoaderData() as ProductListLoader;
  const [productList, setProductList] = useRecoilState(productListState);
  const [searchQuery, setSearchQuery] = useRecoilState(searchState);
  const [scrollPosition, setScrollPosition] =
    useRecoilState(scrollPositionState);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  //쓰로틀링이 적용된 스크롤 이벤트 핸들러
  const throttleScrollHandler = throttle(handleScroll, 500);

  //스크롤 위치 저장을 위한 함수
  useEffect(() => {
    // 컴포넌트 마운트 시 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", throttleScrollHandler);

    // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", throttleScrollHandler);
    };
  }, [throttleScrollHandler, setScrollPosition]);

  // 컴포넌트 마운트 시 저장된 스크롤 위치로 이동
  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    if (loaderProducts) {
      //productList atom에 data 저장
      if (productList.skip === 0 || query !== searchQuery) {
        //데이터 덮어쓰기 방지를 위한 조건
        setProductList(loaderProducts);
      }
    }
    if (query) {
      //searchQuery atom에 data 저장
      setSearchQuery(query);
    }
  }, [
    loaderProducts,
    productList.skip,
    query,
    searchQuery,
    setProductList,
    setSearchQuery,
  ]);

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

  return { productList, searchQuery, isMore, handleScroll, getMoreProduct };
};

export default useProductList;
