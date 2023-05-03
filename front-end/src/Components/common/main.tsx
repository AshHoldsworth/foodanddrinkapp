import { Routes, Route } from "react-router-dom";
import { Home } from "../screens/home";
import { Food } from "../screens/food";
import { ConsumablePage } from "../screens/consumablePage";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/food" element={<Food />} />;
        <Route path="/food/item/:consumableId" element={<ConsumablePage />} />
      </Routes>
    </>
  );
};
