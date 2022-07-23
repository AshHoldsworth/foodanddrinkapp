import '../css/FilterModal.css'
import { capitalFirstLetter } from '../functions/capitalFirstLetter'

export const FilterModal = ({ filter, setFilter }) => {

    const mealTypes = ["all", "breakfast", "lunch", "evening", "dessert"]
    const courseTypes = ["all", "main", "side"]
    const speed = ["all", "1", "2", "3"]
    const cost = ["all", "1", "2", "3"]
    const difficulty = ["all", "1", "2", "3"]
    const leftOvers = ["all", "true", "false"]
    
    return (
        <>
            <div className="FilterModal">
                <div className="background">
                    <div className="container">
                        
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
                                        onChange={e => setFilter({...filter, mealType:(e.target.value)})}
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
                                        onChange={e => setFilter({...filter, courseType:(e.target.value)})}
                                        />
                                </div>))}
                            </div>
                        </div>

                        <div id="sub">
                            <div id="heading">Speed</div>
                            <div id="array">{speed.map((s, index) => (
                                <div key={index} id="value">
                                        {capitalFirstLetter(s)}<input
                                        key={index}
                                        type="radio"
                                        value={s}
                                        name="speed"
                                        checked={s === filter.speed}
                                        onChange={e => setFilter({...filter, speed:(e.target.value)})}
                                        />
                                </div>))}
                            </div>
                        </div>

                        <div id="sub">
                            <div id="heading">Cost</div>
                            <div id="array">{cost.map((c, index) => (
                                <div key={index} id="value">
                                    {c === "all" ? "All" : c}<input
                                        key={index}
                                        type="radio"
                                        value={c}
                                        name="cost"
                                        checked={c === filter.cost}
                                        onChange={e => setFilter({...filter, cost:(e.target.value)})}
                                        />
                                </div>))}
                            </div>
                        </div>

                        <div id="sub">
                            <div id="heading">Difficulty</div>
                            <div id="array">{difficulty.map((d, index) => (
                                <div key={index} id="value">
                                    {d === "all" ? "All" : d}<input
                                        key={index}
                                        type="radio"
                                        value={d}
                                        name="difficulty"
                                        checked={d === filter.difficulty}
                                        onChange={e => setFilter({...filter, difficulty:(e.target.value)})}
                                        />
                                </div>))}
                            </div>
                        </div>

                        <div id="sub">
                            <div id="heading">LeftOvers</div>
                            <div id="array">{leftOvers.map((l, index) => (
                                <div key={index} id="value">
                                        {capitalFirstLetter(l)}<input
                                        key={index}
                                        type="radio"
                                        value={l}
                                        name="leftOvers"
                                        checked={l === filter.leftovers}
                                        onChange={e => setFilter({...filter, leftovers:(e.target.value)})}
                                        />
                                </div>))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
