import { useEffect, useState } from "react";
import { IIngredient } from '../../@Types/IIngredient'
import { ApiClient } from "../../api/ApiClient";
import { Global } from "../../global";


export const Ingredients = () => {
    const [ingredientsList, setIngredientsList] = useState<IIngredient[]>();
    const apiClient = new ApiClient(Global.context.urlPath);

    useEffect(() => {
        apiClient.get("ingredients").then((response: any) => {
            setIngredientsList(response);
        });
      },[])

    return <>
    </>
}
