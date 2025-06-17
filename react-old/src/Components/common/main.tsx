import { Routes, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import { Food } from "../screens/Food";
import { ConsumablePage } from "../screens/ConsumablePage";
import { IngredientsPage } from "../screens/IngredientsPage";
import { AddFood } from "../modals/AddFood";
import { useState } from "react";
import { OpenAddFoodModal } from "../buttons/OpenAddFoodModal";

export const Main: React.FC = () => {
  const [addFoodVisible, setAddFoodVisible] = useState<boolean>(false);

  const onCloseModal = () => setAddFoodVisible(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/food" element={<Food />} />;
        <Route path="/food/:consumableId" element={<ConsumablePage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
      </Routes>
      <OpenAddFoodModal setVisible={setAddFoodVisible} />
      {addFoodVisible && <AddFood onClose={onCloseModal} />}
    </>
  );
};
