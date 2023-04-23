import { IConsumable } from "../../Interfaces/IConsumables";

export const ConsumableItem = ({ consumable }: { consumable: IConsumable }) => {
  console.log(consumable);
  return (
    <div className="consumable-item">
      <p>{consumable.name}</p>
      <p>{consumable.rating}</p>
    </div>
  );
};
