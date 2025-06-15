import { IIngredient } from "../../../@Types/IIngredient"

interface IIngredientsDisplay {
    data: IIngredient[]
}

export const IngredientsDisplay: React.FC<IIngredientsDisplay> = ({ data }) => {
    console.log("IngredientsDisplay")
    return (
        <div className="ingredients-type">
            <h1>Meat</h1>
            {data
                ? data.map((ingredient: IIngredient, index: number) =>
                      ingredient.type === "Meat" ? (
                          <p key={index}>
                              {ingredient.name},{" "}
                              {ingredient.isHealthyOption === true
                                  ? "Healthy"
                                  : "Unhealthy"}
                              , {ingredient.macro}
                          </p>
                      ) : null
                  )
                : null}

            <h1>Veg</h1>
            {data
                ? data.map((ingredient: IIngredient, index: number) =>
                      ingredient.type === "Veg" ? (
                          <p key={index}>
                              {ingredient.name},{" "}
                              {ingredient.isHealthyOption === true
                                  ? "Healthy"
                                  : "Unhealthy"}
                              , {ingredient.macro}
                          </p>
                      ) : null
                  )
                : null}
        </div>
    )
}
