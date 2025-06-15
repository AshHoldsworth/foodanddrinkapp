import { FC } from "react";
import { Consumable } from "@/types/Consumable"

interface Props {
    consumable: Consumable;
}

const FoodItem: FC<Props> = ({ consumable }: Props) => {
    return (
        <div className="bg-sky-950 text-white p-4 m-2 rounded-lg shadow-lg grid-cols-1">
            <h3>{consumable.name}</h3>
            <p>Rating: {consumable.rating}</p>
            <p>Healthy Option: {consumable.isHealthyOption ? 'Yes' : 'No'}</p>
            <p>Cost: ${consumable.cost.toFixed(2)}</p>
            <p>Type: {consumable.type}</p>
            <p>Difficulty: {consumable.difficulty}</p>
            <p>Speed: {consumable.speed}</p>
            <p>Course: {consumable.course}</p>
        </div>
    )
}

export default FoodItem
