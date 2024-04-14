import styled from "styled-components";

const HeaderContainer = styled.header`
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>배컴 쇼핑몰</h1>
    </HeaderContainer>
  );
};

export default Header;
