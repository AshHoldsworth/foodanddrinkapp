import { useNavigate } from "react-router-dom";
import {
  useEffect,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { Global } from "../../global";
import { IFocusedTab } from "../../@Types/IFocusedTab";
import { Page } from "../../App";
import "../../css/header.css";

export const Header = ({
  setCurrentPage,
}: {
  setCurrentPage: Dispatch<SetStateAction<string>>;
}) => {
  const [navMenuDisplay, setNavMenuDisplay] = useState("none");
  const navigate = useNavigate();
  const currentTab = useContext(Page);
  const pages = Global.pages;
  const focusedTab: IFocusedTab = {
    backgroundColor: "#f6f6f6",
    color: "#123456",
  };
  const handleClick = (page: string): void => {
    setCurrentPage(page);
    setNavMenuDisplay("none");
  };

  useEffect(() => {
    navigate(currentTab);
  }, [currentTab]);

  const handleMenu = () => {
    if (navMenuDisplay === "none") {
      setNavMenuDisplay("flex");
    } else {
      setNavMenuDisplay("none");
    }
  };
  useEffect(() => {
    document.getElementById("nav-menu")!.style.display = navMenuDisplay;
    document.getElementById("pop-up-background")!.style.display =
      navMenuDisplay;
  }, [navMenuDisplay]);

  return (
    <>
      <div className="headerbackground">
        <header className="grid">
          <h1>Food and Drink App</h1>
          <nav>
            {pages.map((page) => (
              <>
                <span className="navanimation"
                  onClick={() => handleClick(`${page === "Home" ? "" : page}`)}
                  style={
                    page === currentTab
                      ? focusedTab
                      : currentTab === "" && page === "Home"
                      ? focusedTab
                      : undefined
                  }
                >
                  {page}
                </span>{" "}
                {pages.indexOf(page) === pages.length - 1 ? null : (
                  <span>|</span>
                )}
              </>
            ))}
          </nav>
          <input
            type="input"
            placeholder="Search Food & Drink"
            maxLength={40}
          />
          <img
            src={require("../../Assets/images/search-white.png")}
            alt="search"
            id="nav-search-icon"
          />

          <img
            src={require("../../Assets/images/burger-menu.png")}
            alt="menu"
            id="nav-menu-icon"
            onClick={() => handleMenu()}
          />
          <div id="pop-up-background" onClick={() => handleMenu()}>
            <div id="nav-menu" onMouseLeave={() => handleMenu()}>
              {pages.map((page) => (
                <span className="navanimation"
                  onClick={() => handleClick(`/${page === "Home" ? "" : page}`)}
                  style={
                    `/${page}` === currentTab
                      ? focusedTab
                      : currentTab === "/" && page === "Home"
                      ? focusedTab
                      : undefined
                  }
                >
                  {page}
                </span>
              ))}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
