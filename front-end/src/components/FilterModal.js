import '../css/FilterModal.css'
import { capitalFirstLetter } from '../functions/capitalFirstLetter'

export const FilterModal = ({ filter, setFilter, setOpenModal }) => {

    const handleClose = () => {
        setOpenModal(false)
    }

    const handleReset = () => {
        setFilter({
            "mealType": "all",
            "courseType": "all",
            "timeToPrepare": "all",
            "cost": "all",
            "difficulty": "all",
        })
    }

    const mealTypes = ["all", "breakfast", "lunch", "evening", "dessert"]
    const courseTypes = ["all", "main", "side"]
    const timeToPrepare = ["all", "quick", "medium", "long"]
    const cost = ["all", "cheap", "medium", "expensive"]
    const difficulty = ["all", "easy", "medium", "hard"]

    return (
        <>
            <div className="FilterModal">
                <div className="background">
                    <div className="container">
                        <div id="close-button"><span onClick={handleClose}>x</span></div>
                        
                        <div id="sub">
                            <div id="heading">Meal Type</div>
                            <div id="array">{mealTypes.map((mealType, index) => (
                                <div key={index} id="value">
                                    {capitalFirstLetter(mealType)}<input
                                        key={index}
                                        type="radio"
                                        value={mealType}
                                        name="mealType"
                                        checked={mealType === filter.mealType}
                                        onChange={e => setFilter({ ...filter, mealType: (e.target.value) })}
                                    />
                                </div>))}
                            </div>
                        </div>

                        <div id="sub">
                            <div id="heading">Course Type</div>
                            <div id="array">{courseTypes.map((courseType, index) => (
                                <div key={index} id="value">
                                    {capitalFirstLetter(courseType)}<input
                                        key={index}
                                        type="radio"
                                        value={courseType}
                                        name="courseType"
                                        checked={courseType === filter.courseType}
                                        onChange={e => setFilter({ ...filter, courseType: (e.target.value) })}
                                    />
                                </div>))}
                            </div>
                        </div>

                        <div id="sub">
                            <div id="heading">Time To Prepare</div>
                            <div id="array">{timeToPrepare.map((ttp, index) => (
                                <div key={index} id="value">
                                    {capitalFirstLetter(ttp)}<input
                                        key={index}
                                        type="radio"
                                        value={ttp}
                                        name="timeToPrepare"
                                        checked={ttp === filter.timeToPrepare}
                                        onChange={e => setFilter({...filter, timeToPrepare: (e.target.value) })}
                                    />
                                </div>))}
                            </div>
                        </div>

                        <div id="sub">
                            <div id="heading">Cost</div>
                            <div id="array">{cost.map((c, index) => (
                                <div key={index} id="value">
                                    {capitalFirstLetter(c)}<input
                                        key={index}
                                        type="radio"
                                        value={c}
                                        name="cost"
                                        checked={c === filter.cost}
                                        onChange={e => setFilter({...filter, cost: (e.target.value) })}
                                    />
                                </div>))}
                            </div>
                        </div>

                        <div id="sub">
                            <div id="heading">Difficulty</div>
                            <div id="array">{difficulty.map((d, index) => (
                                <div key={index} id="value">
                                    {capitalFirstLetter(d)}<input
                                        key={index}
                                        type="radio"
                                        value={d}
                                        name="difficulty"
                                        checked={d === filter.difficulty}
                                        onChange={e => setFilter({...filter, difficulty: (e.target.value) })}
                                    />
                                </div>))}
                            </div>
                        </div>
                        
                        <button onClick={() => handleReset()}>Reset</button>

                    </div>
                </div>
            </div>
        </>
    )
}
