import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../CSS/header.css";

export const Header = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [navMenuDisplay, setNavMenuDisplay] = useState("none");
  const navigate = useNavigate();
  const pages = ["Home", "Food", "Drink", "Favourites"];

  const handleClick = (target: string): void => {
    setCurrentTab(`${target}`);
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
  }, [navMenuDisplay]);

  return (
    <>
      <div className="headerbackground">
        <header className="grid">
          <h1>Food and Drink App</h1>
          <nav>
            {pages.map((page) => (
              <a onClick={() => handleClick(`/${page === "Home" ? "" : page}`)}>
                {page}
              </a>
            ))}
          </nav>
          <input type="input" placeholder="Search" />
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

          <div id="nav-menu" onMouseLeave={() => handleMenu()}>
            {pages.map((page) => (
              <a onClick={() => handleClick(`/${page === "Home" ? "" : page}`)}>
                {page}
              </a>
            ))}
          </div>
        </header>
      </div>
    </>
  );
};
