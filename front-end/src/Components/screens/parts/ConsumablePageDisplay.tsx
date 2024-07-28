import { IConsumable } from "../../../@Types/IConsumable";
import { ITab } from "../../../@Types/IFocusedTab";
import { Ingredients } from "../../common/Ingredients";
import { Instructions } from "../../common/Instructions";

interface IConsumablePageDisplay {
    consumable: IConsumable;
    stars: number[];
    ingredientsTab: boolean;
    handleTabs: () => void;
    focusedTab: ITab;
    unfocusedTab: ITab;
}

export const ConsumablePageDisplay: React.FC<IConsumablePageDisplay> = ({ consumable, stars, ingredientsTab, handleTabs, focusedTab, unfocusedTab }) => (
    <div className="grid" id="consumable-page">
      <div id="header"><h1>{consumable.name}</h1></div>
      <div id="image"></div>
      <div id="rating">
        {stars.map((star) => (
          <img
            src={require("../../../assets/images/star-blue.png")}
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
)
