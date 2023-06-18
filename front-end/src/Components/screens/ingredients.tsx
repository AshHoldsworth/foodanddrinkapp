import { useEffect, useState } from "react";
import { IIngredient } from "../../@Types/IIngredient";
import { Global } from "../../global";

export const Ingredients = () => {
  const [ingredientsList, setIngredientsList] = useState<IIngredient[]>();
  const apiClient = Global.apiClient;

  useEffect(() => {
    apiClient.get("ingredients").then((response: any) => {
      setIngredientsList(JSON.parse(response));
    });
  }, [apiClient]);

  return (
    <>
      <div className="ingredients-type">


        <h1>Meat</h1>
        {ingredientsList
          ? ingredientsList.map((ingredient: IIngredient, index: number) =>
              ingredient.type === "Meat" ? (
                <p>
                  {ingredient.name}, {ingredient.isHealthyOption === true ? "Healthy" : "Unhealthy"}, {ingredient.macro}
                </p>
              ) : null
            )
          : null}


        <h1>Veg</h1>
        {ingredientsList
          ? ingredientsList.map((ingredient: IIngredient, index: number) =>
              ingredient.type === "Veg" ? (
                <p>
                  {ingredient.name}, {ingredient.isHealthyOption === true ? "Healthy" : "Unhealthy"}, {ingredient.macro}
                </p>
              ) : null
            )
          : null}


      </div>
    </>
  );
};
