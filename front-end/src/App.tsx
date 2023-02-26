import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Header } from "./Components/common/header";
import { Footer } from "./Components/common/footer";
import { Main } from "./Components/common/main";
import "./CSS/global.css";
const App = () => {
    return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
};

export default App;
