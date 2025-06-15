import { Ingredient } from "./Ingredient"

export type Consumable = {
    name: string
    ingredients: Ingredient[]
    rating: number
    isHealthyOption: boolean
    cost: number
    type: string
    difficulty: number
    speed: number
    course: string
}
