import { createContext, useState } from "react";
import { Header } from "./Components/common/header";
import { Main } from "./Components/common/main";
import "./css/global.css";
const Page = createContext<string>("/");

export const App = () => {
  const [currentPage, setCurrentPage] = useState("/");

  return (
    <div className="App">
      <Page.Provider value={currentPage}>
        <Header setCurrentPage={setCurrentPage} />
        <Main />
      </Page.Provider>
    </div>
  );
};

export { Page };
