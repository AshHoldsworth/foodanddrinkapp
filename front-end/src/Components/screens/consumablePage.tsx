import "../../css/consumablePage.css"
import { useParams } from "react-router-dom"
import { IConsumable } from "../../@Types/IConsumable"
import { useState } from "react"
import { ITab } from "../../@Types/IFocusedTab"
import { useApiLoader } from "../../hooks/useApiLoader"
import { ApiLoader } from "../loaders/ApiLoader"
import { ConsumablePageDisplay } from "./parts/ConsumablePageDisplay"

export const ConsumablePage: React.FC = () => {
    const { consumableId } = useParams()
    const [ingredientsTab, setIngredientsTab] = useState<boolean>(true)

    const focusedTab: ITab = {
        backgroundColor: "#123456",
        color: "#ffffff",
        border: undefined,
        borderBottom: undefined,
    }
    const unfocusedTab: ITab = {
        backgroundColor: "#ffffff",
        color: "#123456",
        border: "2px solid #123456",
        borderBottom: "none",
    }

    const response = useApiLoader<IConsumable>(`consumable/${consumableId}`)

    let stars: number[] = []
    if (response.data) {
        for (let i: number = 0; i < response.data.rating; i++) {
            stars.push(i)
        }
    }

    const handleTabs = () => {
        setIngredientsTab(!ingredientsTab)
    }

    return (
        <ApiLoader
            label="Consumable Page"
            loadStatus={response.status}
            errorMessage={response.errorMessage}
            emptyCheck={response.data}>
            <ConsumablePageDisplay
                consumable={response.data}
                stars={stars}
                ingredientsTab={ingredientsTab}
                handleTabs={handleTabs}
                focusedTab={focusedTab}
                unfocusedTab={unfocusedTab}
            />
        </ApiLoader>
    )
}
