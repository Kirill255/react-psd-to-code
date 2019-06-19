import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`;

function App() {
  return (
    <div className="App">
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <Menu />
      <Main />
    </div>
  );
}

export default App;
