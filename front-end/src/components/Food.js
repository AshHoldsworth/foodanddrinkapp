import '../css/Food.css'
import { capitalFirstLetter } from '../functions/capitalFirstLetter'

export const Food = ({ food }) => {

    return (
        <>
            <div className="Food">
                <div id="food-name">{food.name}</div>
                <div id="image">
                    IMAGE
                </div>
                <div id="food-type">{capitalFirstLetter(food.mealType)} - {capitalFirstLetter(food.courseType)}</div>
                <div id="food-details">
                    <div id="sub">
                        <p>Calories</p> {food.calories}
                    </div>
                    <div id="sub">
                        <p>Cost</p> {food.cost}
                    </div>
                    <div id="sub">
                        <p>Speed</p> {capitalFirstLetter(food.timeToPrepare)}
                    </div>
                    <div id="sub">
                        <p>Difficulty</p> {food.difficulty}
                    </div>
                </div>
                <div id="button">
                    <button>See Method</button>
                </div>
            </div>
        </>
    )
}
