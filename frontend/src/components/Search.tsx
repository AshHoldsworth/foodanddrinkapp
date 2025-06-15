'use client'
import { JSX, useState } from "react"

interface Props {
    className?: string
    onSearch: (query: string) => void
}

export const SearchBox = ({ className, onSearch }: Props): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>("")

    const onChange = (e: any) => {
        setInputValue(e.target.value)
    }

    return (
        <div className={`${className} p-4`}>
            <input
                type="text"
                placeholder="Enter food name or ingredient..."
                className="p-2 border border-gray-300 rounded-lg w-100 col-span-4"
                value={inputValue}
                onChange={event => onChange(event)}
            />
            <button className="ml-2 p-2 bg-sky-950 text-white rounded-lg col-span-1" onClick={() => onSearch(inputValue)}>
                Search
            </button>
        </div>
    )
}
