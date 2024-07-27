import "../../css/food.css";
import { useEffect, useState } from "react";
import { Global } from "../../global";
import { ConsumableItem } from "../common/ConsumableItem";
import { IConsumable } from "../../@Types/IConsumable";

export const Food: React.FC = () => {
  const [consumablesList, setConsumablesList] = useState<IConsumable[]>();
  const [healthyOption, setHealthyOption] = useState<boolean>();
  const apiClient = Global.apiClient

  const handleHealthyOption = () => setHealthyOption(!healthyOption);

  useEffect(() => {
    apiClient.get("consumables/food").then((response: any) => {
      setConsumablesList(response);
    });
  },[apiClient])

  let consumablesToDisplay: IConsumable[] = [];

  if (consumablesList) {
    JSON.parse(consumablesList.toString()).map((consumable: IConsumable) =>
      healthyOption && consumable.isHealthyOption
        ? consumablesToDisplay.push(consumable)
        : !healthyOption
        ? consumablesToDisplay.push(consumable)
        : null
    );
  }

  return (
    <>
      <div id="filter-bar" className=".grid">
        <label className="container">
          Healthy Options
          <input
            type="checkbox"
            checked={healthyOption}
            onChange={handleHealthyOption}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <div id="food-list" className="grid">
        {consumablesToDisplay ? (
          consumablesToDisplay.map((consumable: IConsumable, index: number) => (
            <ConsumableItem consumable={consumable} index={index} />
          ))
        ) : (
          <p>No Food to display!</p>
        )}
      </div>
    </>
  );
};
