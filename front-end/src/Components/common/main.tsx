import { Routes, Route } from "react-router-dom";
import { Home } from "../screens/home";
import { Food } from "../screens/food";
import { ConsumablePage } from "../screens/consumablePage";
import { Ingredients } from "../screens/ingredients";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/food" element={<Food />} />;
        <Route path="/food/:consumableId" element={<ConsumablePage />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes>
    </>
  );
};
