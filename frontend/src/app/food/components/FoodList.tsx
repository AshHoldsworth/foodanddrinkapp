"use client"
import FoodItem from "@/components/FoodItem"
import { Consumable } from "@/types/Consumable"
import { ReactNode, use, useMemo, useState } from "react"
import { SearchBox } from "../../../components/SearchBox"

interface Props {
    promise: Promise<Consumable[]>
}

export const FoodList = ({ promise }: Props): ReactNode => {
    const [query, setQuery] = useState("")

    const foodList: Consumable[] = use(promise)

    const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery.trim())
    }

    const filteredData = useMemo(() => {
        if (!query) return foodList
        return foodList.filter(
            (item: Consumable) =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.ingredients.some((ingredient) =>
                    ingredient.name.toLowerCase().includes(query.toLowerCase())
                )
        )
    }, [query, promise])

    return (
        <>
            <SearchBox className="grid grid-cols-5" onSearch={handleSearch} />
            <div className="grid">
                {filteredData.length === 0 ? (
                    <div>No food items found</div>
                ) : (
                    filteredData.map((consumable, index) => (
                        <FoodItem consumable={consumable} key={index} />
                    ))
                )}
            </div>
        </>
    )
}
