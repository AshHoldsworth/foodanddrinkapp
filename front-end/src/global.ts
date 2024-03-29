import { ApiClient } from "./api/ApiClient";

export namespace Global {
    export const pages: string[] = ["Home", "Food", "Drink", "Ingredients", "Favourites"];
    export const context = {
        urlPath: "https://localhost:7010/",
      };
    export const apiClient = new ApiClient(Global.context.urlPath);
}

