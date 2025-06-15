import { IConsumable } from "../../../@Types/IConsumable"
import { ConsumableItem } from "../../common/ConsumableItem"

interface IFoodDisplay {
    consumablesToDisplay: IConsumable[]
    healthyOption: boolean
    handleHealthyOption: () => void
}

export const FoodDisplay: React.FC<IFoodDisplay> = ({consumablesToDisplay, healthyOption, handleHealthyOption}) => {
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
    )
}
