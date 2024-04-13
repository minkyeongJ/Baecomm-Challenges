import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
      --logo-black: #212121;
      --logo-yellow: #ffbb2f;
      --btn-gray: #dedede;
      --error-red: #eb5757;
      --gray-color: #767676;
      --light-gray: #c4c4c4;
      --comment-black: #333333;
      --success-green: #00b890;
  }

  html {
      font-size: 62.5%;
      margin: 0 auto;
  }

  body {
      font-size: 1.6rem;
      line-height: 1.25;
      font-family: 'SpoqaHanSansNeo-R';
      background-color: white;
  }

  .ir {
      position: absolute;
      clip: rect(0 0 0 0);
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
  }
`;

export default GlobalStyle;
