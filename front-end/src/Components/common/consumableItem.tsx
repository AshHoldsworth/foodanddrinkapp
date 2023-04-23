import "../../css/consumableItem.css";
import { IConsumable } from "../../Interfaces/IConsumables";

export const ConsumableItem = ({
  consumable,
  index,
}: {
  consumable: IConsumable;
  index: number;
}) => {
  let stars: string = "";
  for (let i = 0; i < consumable.rating; i++) {
    stars = stars + "*";
  }

  return (
    <div id="consumable-item" key={index}>
      <h1>{consumable.name}</h1>
      <p>Rating: {stars}</p>
    </div>
  );
};
