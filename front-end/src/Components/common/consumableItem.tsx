import "../../css/consumableItem.css";
import { IConsumable } from "../../@Types/IConsumables";
import { IHeaderSize } from "../../@Types/IHeaderSize";
import { useCallback, Key } from "react";
import { useNavigate } from "react-router-dom";

export const ConsumableItem = ({
  consumable,
  index,
}: {
  consumable: IConsumable;
  index: number;
}) => {

  const navigate = useNavigate()
  const handleClick = useCallback(() => navigate(`/food/item/${consumable.id}`), []);

  let stars: any = [];
  for (let i: number = 0; i < consumable.rating; i++) {
    stars.push(i);
  }

  let headerSize: IHeaderSize = {
    fontSize: 22,
  };

  if (consumable.name.length > 15) {
    headerSize = {
      fontSize: 15,
    };
  }

  return (
    <div className="grid" id="consumable-item" key={index} onClick={handleClick}>
      <div id="header">
        <h2 style={headerSize}>{consumable.name}</h2>
      </div>
      <div id="item-image"></div>
      <div id="item-stars">
        {stars.map((star: Key | null | undefined) => (
          <img
            src={require("../../Assets/images/star.png")}
            alt="search"
            id="star"
            key={star}
          />
        ))}
      </div>
      <div id="information-section">
        <div className="information">
          <p>Difficulty</p>
          <p>
            {consumable.difficulty === 1
              ? "Easy"
              : consumable.difficulty == 2
              ? "Medium"
              : "Slow"}
          </p>
        </div>
        <hr />
        <div className="information">
          <p>Cost</p>
          <p>
            {consumable.cost === 1 ? "£" : consumable.cost == 2 ? "££" : "£££"}
          </p>
        </div>
        <hr />
        <div className="information">
          <p>Speed</p>
          <p>
            {consumable.speed === 1
              ? "Quick"
              : consumable.speed == 2
              ? "Medium"
              : "Slow"}
          </p>
        </div>
      </div>
    </div>
  );
};
