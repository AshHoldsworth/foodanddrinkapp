import "../../css/food.css";
import { useState } from "react";
import { ApiClient } from "../../api/ApiClient";
import { Global } from "../../global";
import { ConsumableItem } from "../common/consumableItem";
import { IConsumable } from "../../Interfaces/IConsumables";

export const Food = () => {
  const [consumablesList, setConsumablesList] = useState<[]>();
  const apiClient = new ApiClient(Global.context.urlPath);

  apiClient.get("consumables/food").then((response: any) => {
    setConsumablesList(response);
  });

  return (
    <>
      <div id="food-list" className="grid">
        {consumablesList ? (
          JSON.parse(consumablesList.toString()).map(
            (consumable: IConsumable, index: number) => (
              <ConsumableItem consumable={consumable} index={index} />
            )
          )
        ) : (
          <p>Nothing to display!</p>
        )}
      </div>
    </>
  );
};
