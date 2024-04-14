import { useNavigate } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BackButton = styled.button`
  background-color: #f1f1f1;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  position: absolute;
  left: 30px;
  top: 1vh;
`;

const ProductDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ProductThumbnail = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductBrand = styled.p`
  color: #333;
`;
const ProductTitle = styled.h3`
  font-size: medium;
`;

const ProductPrice = styled.p`
  font-size: x-large;
  font-weight: 900;
`;

const ProductDescription = styled.p``;

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productDetail } = useProductDetail();

  return (
    <Wrapper>
      <BackButton
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        ← 뒤로가기
      </BackButton>
      <ProductDetails>
        <ProductThumbnail
          src={productDetail.thumbnail}
          alt={`${productDetail.title} 이미지`}
        />
        <ProductInfo>
          <ProductBrand>{productDetail.brand}</ProductBrand>
          <ProductTitle>{productDetail.title}</ProductTitle>
          <ProductPrice>${productDetail.price}</ProductPrice>
          <ProductDescription>{productDetail.description}</ProductDescription>
        </ProductInfo>
        <ProductImages>
          {productDetail?.images?.map((image, i) => (
            <ProductImage
              src={image}
              alt={`${i}번째 ${productDetail.title} 이미지`}
              key={`${image}_${i}`}
            />
          ))}
        </ProductImages>
      </ProductDetails>
    </Wrapper>
  );
};

export default ProductDetail;
