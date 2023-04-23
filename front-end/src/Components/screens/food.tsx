import "../../CSS/food.css";
import { useState } from "react";
import { ApiClient } from "../../api/ApiClient";
import { Global } from "../../global";

export const Food = () => {
  const [consumablesList, setConsumablesList] = useState<string[]>();
  const apiClient = new ApiClient(Global.context.urlPath);

  apiClient.get("consumables").then((results: any) => {
    setConsumablesList(results);
  });
  return <>{consumablesList}</>;
};
