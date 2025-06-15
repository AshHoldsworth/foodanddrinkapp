import { NextPage } from "next"
import { config } from "@/config"
import { SuspenseLoader } from "@/api/SuspenseLoader"
import { Consumable } from "@/types/Consumable"
import FoodClient from "./FoodClient"

const FoodPage: NextPage = async () => {
    const response = await fetch(`${config.baseUrl}/consumables/food`)
    const data: Consumable[] = await response.json()

    if (!response.ok || data.length === 0) {
        console.error("Failed to fetch food items or no items found")
        return <div>No food items available</div>
    }

    return (
        <SuspenseLoader response={response}>
            <FoodClient data={data} />
        </SuspenseLoader>
    )
}

export default FoodPage
