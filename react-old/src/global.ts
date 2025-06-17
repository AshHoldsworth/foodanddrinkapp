import { ApiClient } from "./api/ApiClient"

export namespace Global {
    export const pages: string[] = [
        "Home",
        "Food",
        "Drink",
        "Ingredients",
        "Favourites",
    ]
    export const context = {
        urlPath: "http://localhost:5278/",
    }
    export const apiClient = new ApiClient(Global.context.urlPath)
}
