import { NextPage } from "next"
import { FoodList } from "./components/FoodList"
import { get } from "@/api/get"
import { Consumable } from "@/types/Consumable"
import { Suspense } from "react"

const FoodPage: NextPage = async () => {
    const request: Promise<Consumable[]> = get("/consumables/food")
    return (
        <>
            <Suspense
                fallback={
                    <div className="text-center text-gray-500">Loading...</div>
                }>
                <FoodList promise={request} />
            </Suspense>
        </>
    )
}

export default FoodPage
