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
      {consumablesList ? (
        JSON.parse(consumablesList.toString()).map(
          (consumable: IConsumable) => (
            <ConsumableItem consumable={consumable} />
          )
        )
      ) : (
        <p>Nothing to display!</p>
      )}
    </>
  );
};
