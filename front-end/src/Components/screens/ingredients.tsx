import { IIngredient } from "../../@Types/IIngredient";
import { IApiLoader, useApiLoader } from "../../hooks/useApiLoader";
import { ApiLoader } from "../loaders/ApiLoader";

export const Ingredients: React.FC = () => {
  const endpoint: string = "ingredients";
  const response: IApiLoader<IIngredient[]> = useApiLoader<IIngredient[]>(endpoint);

  return (
    <ApiLoader
      label="Ingredients List"
      loadStatus={response.status}
      errorMessage={response.error}>
      <div className="ingredients-type">
        <h1>Meat</h1>
        {response.data
          ? response.data.map((ingredient: IIngredient, index: number) =>
              ingredient.type === "Meat" ? (
                <p>
                  {ingredient.name}, {ingredient.isHealthyOption === true ? "Healthy" : "Unhealthy"}, {ingredient.macro}
                </p>
              ) : null
            )
          : null}


        <h1>Veg</h1>
        {response.data
          ? response.data.map((ingredient: IIngredient, index: number) =>
              ingredient.type === "Veg" ? (
                <p>
                  {ingredient.name}, {ingredient.isHealthyOption === true ? "Healthy" : "Unhealthy"}, {ingredient.macro}
                </p>
              ) : null
            )
          : null}


      </div>
    </ApiLoader>
  );
};
