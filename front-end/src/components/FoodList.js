import '../css/FoodList.css'
import { useState } from "react"
import { useFoodList } from "../hooks/useFoodList"
import { Food } from "./Food"

export const FoodList = () => {
    const [foodList, setFoodList] = useState([])
    useFoodList({ setFoodList })
    
    return (
        <>
            <div className="FoodList">
                {foodList.map((food, i) => (
                    <Food key={i} food={food} />
                ))}
            </div>
        </>
    )
}
