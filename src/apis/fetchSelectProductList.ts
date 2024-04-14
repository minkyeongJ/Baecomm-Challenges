import { API_URL } from "../helper/constants/apiUrl";
import { ProductList } from "../types/products";

interface Props {
  query?: string;
  limit?: number;
  skip?: number;
}

const fetchSelectProductList = async ({
  query = "",
  limit = 10,
  skip = 0,
}: Props): Promise<ProductList | undefined> => {
  try {
    const response = await fetch(
      `${API_URL}/products/search?q=${query}&limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API 데이터를 불러오는 중 오류가 발생했습니다:", error);
  }
};

export default fetchSelectProductList;
