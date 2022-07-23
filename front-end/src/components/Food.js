import '../css/Food.css'
import { useState, useEffect } from 'react'
import { FoodMethodModal } from './FoodMethodModal'
import { capitalFirstLetter } from '../functions/capitalFirstLetter'

export const Food = ({ food, setDisplayFilterButton }) => {
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        setDisplayFilterButton(!openModal)
    }, [openModal])

    return food.name ? (
        <>
            <div className={"Food"}>
                <div id="food-name">{food.name}</div>
                <div id="food-description">{food.description}</div>
                <div id="image-ingredients">
                    <img src={require(`../images/food/${food.lowerCaseName}.png`)} />
                    <div id="food-ingredients">
                        <div id="heading">Ingredients</div>
                        {food.ingredients.map((ingredient, index) => (
                            <div id="ingredient" key={index}>{capitalFirstLetter(ingredient)}</div>
                            ))
                        }
                    </div>
                </div>
                <div id="food-type">{capitalFirstLetter(food.mealType)} - {capitalFirstLetter(food.courseType)}</div>
                <div id="food-details">
                    <div id="sub">
                        <p>Calories approx.</p> {food.calories}
                    </div>
                    <div id="sub">
                        <p>Cost of Ingredients</p> {capitalFirstLetter(food.cost)}
                    </div>
                    <div id="sub">
                        <p>Time to Prepare</p> {capitalFirstLetter(food.timeToPrepare)}
                    </div>
                    <div id="sub">
                        <p>Difficulty</p> {capitalFirstLetter(food.difficulty)}
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
