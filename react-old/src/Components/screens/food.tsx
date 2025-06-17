import "../../css/food.css"
import { useState } from "react"
import { IConsumable } from "../../@Types/IConsumable"
import { IApiLoader, useApiLoader } from "../../hooks/useApiLoader"
import { ApiLoader } from "../loaders/ApiLoader"
import { FoodDisplay } from "./parts/FoodDisplay"

export const Food: React.FC = () => {
    const [healthyOption, setHealthyOption] = useState<boolean>(false)

    const endpoint: string = "consumables/food"
    const response: IApiLoader<IConsumable[]> =
        useApiLoader<IConsumable[]>(endpoint)

    const handleHealthyOption = () => setHealthyOption(!healthyOption)

    let consumablesToDisplay: IConsumable[] = []

    if (response.data) {
        response.data.map((consumable: IConsumable) =>
            healthyOption && consumable.isHealthyOption
                ? consumablesToDisplay.push(consumable)
                : !healthyOption
                ? consumablesToDisplay.push(consumable)
                : null
        )
    }

    return (
        <>
            <ApiLoader
                label="Consumables List"
                loadStatus={response.status}
                errorMessage={response.error}
                emptyCheck={response.data}>
                <FoodDisplay
                    consumablesToDisplay={consumablesToDisplay}
                    healthyOption={healthyOption}
                    handleHealthyOption={handleHealthyOption}
                />
            </ApiLoader>
        </>
    )
}
