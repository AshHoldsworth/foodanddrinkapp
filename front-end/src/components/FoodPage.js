import '../css/App.css'
import { FilterModal } from './FilterModal'
import { useState, useEffect } from 'react'
import { useFoodList } from "../hooks/useFoodList"
import { Food } from "./Food"

export const FoodPage = ({foodList, setFoodList}) => {
    const [openFilterModal, setOpenFilterModal] = useState(false)
    const handleOpenFilter = () => {
        setOpenFilterModal(true)
    }
    
    useFoodList({ setFoodList })

    const [filter, setFilter] = useState({
        "mealType": "all",
        "courseType": "all",
        "speed": "all",
        "cost": "all",
        "difficulty": "all",
        "leftovers": "all"
    })

    // useEffect(() => {
    //     if (foodList[0]) {
    //         const newList = { ...foodList }
    //         console.log("newList: ", newList)
    //         newList.filter(food => {
    //             food.mealType = filter.mealType
    //         })
    //     }
    // }, [filter])


    return foodList[0] ? (
        <>
            <div className="Main">
                {foodList.map((food, index) => (
                    <Food key={index} food={food} />
                ))}
                <div id="filter-button">
                    <button onClick={handleOpenFilter}>Filter</button>
                </div>
            </div>
            {openFilterModal && <FilterModal setOpenModal={setOpenFilterModal} filter={filter} setFilter={setFilter} />}
        </>
    ) : (<p>Food List is empty!</p>)
}
