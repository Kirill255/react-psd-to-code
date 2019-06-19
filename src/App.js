import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";

const bg_url = process.env.PUBLIC_URL + "/img/bg.png";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`;

const MenuWrapper = styled.div`
  height: 89px;
  padding-top: 20px;
`;

const MainWrapper = styled.main`
  height: 600px;
  padding-top: 130px;
  background: url(${bg_url}) no-repeat;
  background-size: cover;
`;

function App() {
  return (
    <div className="App">
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <MenuWrapper>
        <Menu />
      </MenuWrapper>

      <MainWrapper>
        <Main />
      </MainWrapper>
    </div>
  );
}

export default App;
