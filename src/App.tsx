import { RecoilRoot } from "recoil";
import ProductList from "./pages/ProductList";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RecoilRoot>
        <Outlet />
      </RecoilRoot>
    </>
  );
}

export default App;
