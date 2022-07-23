import '../css/App.css'
import { FilterModal } from './FilterModal'
import { useState, useEffect } from 'react'
import { useFoodList } from "../hooks/useFoodList"
import { Food } from "./Food"

export const FoodPage = ({ foodList, setFoodList }) => {
    const [openFilterModal, setOpenFilterModal] = useState(false)
    const handleOpenFilter = () => {
        setOpenFilterModal(true)
    }

    useFoodList({ setFoodList })
    const [filteredList, setFilteredList] = useState(foodList)
    const [filter, setFilter] = useState({
        "mealType": "all",
        "courseType": "all",
        "timeToPrepare": "all",
        "cost": "all",
        "difficulty": "all"
    })  
    useEffect(() => {
        if (foodList[0]) {
            let newList = [ ...foodList ]
            newList = newList.filter(food => 
                (filter.mealType === "all" ? true : food.mealType === filter.mealType) &&
                (filter.courseType === "all" ? true : food.courseType === filter.courseType) &&
                (filter.timeToPrepare === "all" ? true : food.timeToPrepare === filter.timeToPrepare) &&
                (filter.cost === "all" ? true : food.cost === filter.cost) &&
                (filter.difficulty === "all" ? true : food.difficulty === filter.difficulty)
            )
            setFilteredList(newList)
        }
    }, [filter, foodList])

    return foodList[0] ? (
        <>
            <div className="Main">
                {filteredList.map((food, index) => (
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
