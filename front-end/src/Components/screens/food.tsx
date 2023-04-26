import "../../css/food.css";
import { useState } from "react";
import { ApiClient } from "../../api/ApiClient";
import { Global } from "../../global";
import { ConsumableItem } from "../common/consumableItem";
import { IConsumable } from "../../@Types/IConsumables";

export const Food = () => {
  const [consumablesList, setConsumablesList] = useState<[]>();
  const [healthyOption, setHealthyOption] = useState<boolean>();
  const apiClient = new ApiClient(Global.context.urlPath);

  const handleHealthyOption = () => setHealthyOption(!healthyOption);

  apiClient.get("consumables/food").then((response: any) => {
    setConsumablesList(response);
    console.log(healthyOption);
  });

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
        <p>
          Healthy Options:{" "}
          <input
            type="checkbox"
            checked={healthyOption}
            onChange={handleHealthyOption}
          />
        </p>
      </div>
      <div id="food-list" className="grid">
        {consumablesToDisplay ? (
          consumablesToDisplay.map((consumable: IConsumable, index: number) => (
            <ConsumableItem consumable={consumable} index={index} />
          ))
        ) : (
          <p>Nothing to display!</p>
        )}
      </div>
    </>
  );
};
