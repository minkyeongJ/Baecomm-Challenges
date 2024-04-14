import { useNavigate } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";
import * as S from "./Style.styled";
import LazyImage from "../../components/LazyImage";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productDetail } = useProductDetail();

  return (
    <S.Wrapper>
      <S.BackButton
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        목록으로 돌아가기
      </S.BackButton>
      <S.Details>
        <S.Thumbnail
          src={productDetail.thumbnail}
          alt={`${productDetail.title} 이미지`}
        />
        <S.Info>
          <S.Brand>{productDetail.brand}</S.Brand>
          <S.Title>{productDetail.title}</S.Title>
          <S.Price>${productDetail.price}</S.Price>
          <S.Description>{productDetail.description}</S.Description>
        </S.Info>
        <S.Images>
          {productDetail?.images?.map((image, i) => (
            <LazyImage
              src={image}
              alt={`${i}번째 ${productDetail.title} 이미지`}
              key={`${image}_${i}`}
            />
          ))}
        </S.Images>
      </S.Details>
    </S.Wrapper>
  );
};

export default ProductDetail;
