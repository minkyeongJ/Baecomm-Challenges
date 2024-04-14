import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* reset css */
  a{
    text-decoration: none;
    color: inherit;
  }

  *{
    box-sizing: border-box;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
    margin: 0;
    padding: 0;
    border: 0;
    /* font-size: 10px; */
    vertical-align: baseline;
  }

  body{
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #F6F9F0;
    margin-bottom: 100px;
  }

  ol, ul, li{
    list-style: none;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  /* 전역 적용 스타일 */
  :root {
  }

  html {
    font-size: 62.5%;
    margin: 0 auto;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.25;
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
