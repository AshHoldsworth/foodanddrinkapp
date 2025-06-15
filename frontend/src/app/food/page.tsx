import { NextPage } from "next"
import FoodItem from "@/components/FoodItem"
import { JSX, Key } from "react"
import { Consumable } from "@/types/Consumable"
import { config } from "@/config"
import { SuspenseLoader } from "@/api/SuspenseLoader"

interface Props {
    className?: string
}

const FoodPage: NextPage<Props> = async ({}): Promise<React.ReactNode> => {
    const response = await fetch(`${config.baseUrl}/consumables/food`)
    const data: Consumable[] = await response.json()

    if (!response.ok || data.length === 0) {
        console.error("Failed to fetch food items or no items found")
        return <div>No food items available</div>
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-4">Food</h1>
            <SuspenseLoader response={response}>
                <div className="flex flex-wrap justify-center">
                    {data.map(
                        (consumable: Consumable, index: Key): JSX.Element => (
                            <FoodItem consumable={consumable} key={index} />
                        )
                    )}
                </div>
            </SuspenseLoader>
        </div>
    )
}

export default FoodPage
