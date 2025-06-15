"use client"
import { useState, useMemo } from "react"
import { Consumable } from "@/types/Consumable"
import FoodItem from "@/components/FoodItem"
import { SearchBox } from "@/components/Search"

interface Props {
    data: Consumable[]
    className?: string
}

const FoodClient: React.FC<Props> = ({ data, className }) => {
    const [query, setQuery] = useState("")

    const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery.trim())
    }

    const filtered = useMemo(() => {
        if (!query) return data
        return data.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.ingredients.some(ingredient =>
                ingredient.name.toLowerCase().includes(query.toLowerCase())
            )
        )
    }, [query, data])

    return (
        <div className={className}>
            <SearchBox className="grid grid-cols-5" onSearch={handleSearch} />
            <div className="grid">
                {filtered.length === 0 ? (
                    <div>No food items found</div>
                ) : (
                    filtered.map((consumable, idx) => (
                        <FoodItem consumable={consumable} key={idx} />
                    ))
                )}
            </div>
        </div>
    )
}

export default FoodClient
