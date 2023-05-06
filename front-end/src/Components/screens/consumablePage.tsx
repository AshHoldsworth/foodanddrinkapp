import "../../css/consumablePage.css";
import { useParams } from "react-router-dom";
import { IConsumable } from "../../@Types/IConsumables";
import { Key, useEffect, useState } from "react";
import { ApiClient } from "../../api/ApiClient";
import { Global } from "../../global";

export const ConsumablePage = () => {
  const { consumableId } = useParams();
  const [consumable, setConsumable] = useState<IConsumable>();

  const apiClient = new ApiClient(Global.context.urlPath);

  useEffect(() => {
    apiClient
      .get(`consumable/food/item/${consumableId}`)
      .then((response: any) => {
        setConsumable(JSON.parse(response.toString()));
      });
  },[]);

  let stars: any = [];
  if (consumable) {
    console.log(consumable);

    for (let i: number = 0; i < consumable.rating; i++) {
      stars.push(i);
    }
  }
  
  return consumable ? <>
    <div className="grid" id="consumable-page">
      <div id="header"><h1>{consumable.name}</h1></div>
      <div id="image"></div>
      <div id="rating">
        {stars.map((star: Key | null | undefined) => (
          <img
            src={require("../../Assets/images/star.png")}
            alt="search"
            id="star"
            key={star}
          />
        ))}
      </div>
      <div id="information">
        <p>Cost: {consumable.cost === 1 ? "£" : consumable.cost == 2 ? "££" : "£££"}</p>
      </div>
    </div>
  </> : null;
};
