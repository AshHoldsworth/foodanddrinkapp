import { createContext, useState } from "react";
import { Header } from "./Components/common/Header";
import { Main } from "./Components/common/Main";
import "./css/global.css";

const Page = createContext<string>("/");

export const App = () => {
  const [currentPage, setCurrentPage] = useState("");

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
