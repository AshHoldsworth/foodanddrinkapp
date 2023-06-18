import "../../css/consumablePage.css";
import { useParams } from "react-router-dom";
import { IConsumable } from "../../@Types/IConsumable";
import { Key, useEffect, useState } from "react";
import { Global } from "../../global";
import { IFocusedTab } from "../../@Types/IFocusedTab";
import { Ingredients } from "../common/ingredients";
import { Instructions } from "../common/instructions";

export const ConsumablePage = () => {
  const { consumableId } = useParams();
  const [consumable, setConsumable] = useState<IConsumable>();
  const [ingredientsTab, setIngredientsTab] = useState<Boolean>(true);
  const focusedTab: IFocusedTab = {
    backgroundColor: "#123456",
    color: "#ffffff",
  };
  const unfocusedTab: IFocusedTab = {
    backgroundColor: "#ffffff",
    color: "#123456",
  };

  const apiClient = Global.apiClient;

  useEffect(() => {
    apiClient
      .get(`consumable/${consumableId}`)
      .then((response: any) => {
        setConsumable(JSON.parse(response));
      });
  },[apiClient, consumableId]);

  let stars: any = [];
  if (consumable) {
    for (let i: number = 0; i < consumable.rating; i++) {
      stars.push(i);
    }
  }

  const handleTabs = () => {
    setIngredientsTab(!ingredientsTab)
  }

  console.log(consumable?.ingredients);

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
