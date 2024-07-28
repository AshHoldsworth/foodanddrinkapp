import { Routes, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import { Food } from "../screens/Food";
import { ConsumablePage } from "../screens/ConsumablePage";
import { IngredientsPage } from "../screens/IngredientsPage";

export const Main: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/food" element={<Food />} />;
        <Route path="/food/:consumableId" element={<ConsumablePage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
      </Routes>
    </>
  );
};
