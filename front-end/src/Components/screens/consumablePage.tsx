import "../../css/consumablePage.css";
import { useParams } from "react-router-dom";
import { IConsumable } from "../../@Types/IConsumable";
import { Key, useEffect, useState } from "react";
import { ITab } from "../../@Types/IFocusedTab";
import { Ingredients } from "../common/Ingredients";
import { Instructions } from "../common/Instructions";
import { IApiLoader, useApiLoader } from "../../hooks/useApiLoader";
import { LoadStatus } from "../loaders/ApiLoader";

export const ConsumablePage: React.FC = () => {
  const { consumableId } = useParams();
  const [ingredientsTab, setIngredientsTab] = useState<Boolean>(true);
  const [response, setResponse] = useState<IApiLoader<IConsumable>>({ data: undefined, status: LoadStatus.Idle, error: null });
 
  const focusedTab: ITab = {
    backgroundColor: "#123456",
    color: "#ffffff",
    border: undefined,
    borderBottom: undefined
  };
  const unfocusedTab: ITab = {
    backgroundColor: "#ffffff",
    color: "#123456",
    border: "2px solid #123456",
    borderBottom: "none"
  };

  useApiLoader<IConsumable>(`consumable/${consumableId}`).then(response => setResponse(response));

  const consumable = response.data;

  let stars: number[] = [];
  if (consumable) {
    for (let i: number = 0; i < consumable.rating; i++) {
      stars.push(i);
    }
  }

  const handleTabs = () => {
    setIngredientsTab(!ingredientsTab)
  }

  return consumable ? <>
    <div className="grid" id="consumable-page">
      <div id="header"><h1>{consumable.name}</h1></div>
      <div id="image"></div>
      <div id="rating">
        {stars.map((star: Key | null | undefined) => (
          <img
            src={require("../../Assets/images/star-blue.png")}
            alt="search"
            id="star"
            key={star}
          />
        ))}
      </div>
      <div id="information">
        <p>Difficulty: {consumable.difficulty === 1
              ? "Easy"
              : consumable.difficulty === 2
              ? "Medium"
              : "Slow"}</p>
        <p>Cost: {consumable.cost === 1 ? "£" : consumable.cost === 2 ? "££" : "£££"}</p>
        <p>Speed: {consumable.speed === 1
              ? "Quick"
              : consumable.speed === 2
              ? "Medium"
              : "Slow"}</p>
      </div>
      <div id="tabs">
        <div className="tab" id="ingredients-tab" onClick={handleTabs} style={ingredientsTab ? focusedTab : unfocusedTab}>
          <p>Ingredients</p>
        </div>
        <div className="tab" id="instructions-tab" onClick={handleTabs} style={!ingredientsTab ? focusedTab : unfocusedTab}>
          <p>Instructions</p>
        </div>
      </div>
      {ingredientsTab && <Ingredients ingredients={consumable.ingredients} />}
      {!ingredientsTab && <Instructions instructions={["instructions", "instructions"]} />}
    </div>
  </> : null;
};
