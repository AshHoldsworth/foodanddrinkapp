import "../../css/consumableItem.css";
import { IConsumable } from "../../@Types/IConsumables";
import { IHeaderSize } from "../../@Types/IHeaderSize";
import { Key } from "react";

export const ConsumableItem = ({
  consumable,
  index,
}: {
  consumable: IConsumable;
  index: number;
}) => {
  
  let stars: any = [];
  for (let i: number = 0; i < consumable.rating; i++) {
    stars.push(i);
  }

  let headerSize:IHeaderSize = {
    fontSize: 22
  };

  if (consumable.name.length > 15) {
    headerSize = {
      fontSize: 15
    };
  }

  return (
    <div id="consumable-item" key={index}>
      <div className="header">
        <h2 style={headerSize}>{consumable.name}</h2>
      </div>
      <p>{stars.map((star: Key | null | undefined) => (
        <img
        src={require("../../Assets/images/star.png")}
        alt="search"
        id="star"
        key={star}
      />))}
        </p>
        <div id="item-image">

        </div>
    </div>
  );
};
