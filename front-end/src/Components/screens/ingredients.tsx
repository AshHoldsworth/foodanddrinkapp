import { IIngredient } from "../../@Types/IIngredient";
import { IApiLoader, useApiLoader } from "../../hooks/useApiLoader";
import { ApiLoader } from "../loaders/ApiLoader";
import { IngredientsDisplay } from "./parts/IngredientsDisplay";

export const Ingredients: React.FC = () => {
  const endpoint: string = "ingredients";
  const response: IApiLoader<IIngredient[]> = useApiLoader<IIngredient[]>(endpoint);

  return (
    <ApiLoader
      label="Ingredients List"
      loadStatus={response.status}
      errorMessage={response.error}>
        <IngredientsDisplay data={response.data} />
    </ApiLoader>
  );
};
