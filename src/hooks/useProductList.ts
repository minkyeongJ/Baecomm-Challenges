import { LoaderFunction } from "react-router-dom";
import { useRecoilState } from "recoil";
import fetchSelectProductList from "../apis/fetchSelectProductList";
import { productListState } from "../recoil/atoms/productListState";
import { ProductList } from "../types/products";

//검색 기능을 위한 로더 함수
export const loader: LoaderFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("search") || "";
  const loaderProducts = await fetchSelectProductList({
    query,
  });

  return { loaderProducts, query };
};
interface UseProductList {
  productList: ProductList;
}

const useProductList = (): UseProductList => {
  const [productList, setProductList] = useRecoilState(productListState);

  // useEffect(() => {
  //   //초기 랜더링 시 검색 결과를 저장
  //   const updateProductList = async () => {
  //     const data = await fetchSelectProductList({});
  //     if (data) {
  //       setProductList(data);
  //     }
  //   };

  //   updateProductList();
  // }, [setProductList]);

  return { productList };
};

export default useProductList;
