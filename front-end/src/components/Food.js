import '../css/Food.css'
import { useState } from 'react'
import { FoodMethodModal } from './FoodMethodModal'
import { capitalFirstLetter } from '../functions/capitalFirstLetter'

export const Food = ({ food }) => {
    const [openModal, setOpenModal] = useState(false)

    return food.name ? (
        <>
            <div className={"Food"}>
                <div id="food-name">{food.name}</div>
                <div id="food-description">{food.description}</div>
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
                        <p>Speed</p> {(food.timeToPrepare)}
                    </div>
                    <div id="sub">
                        <p>Difficulty</p> {food.difficulty}
                    </div>
                </div>
                <div id="button">
                    <button onClick={() => setOpenModal(true)}>See Method</button>
                    {openModal && <FoodMethodModal method={food.method} setOpenModal={setOpenModal} />}
                </div>
                <hr />
            </div>

        </>
    ) : (<p>No Food</p>)
}
