export const Ingredients = ({ingredients}: {ingredients: [];}) => {

    for (const ingredient in ingredients) {
        console.log(ingredient)
    }

    return <>
        <div id="sub-section">
            <p>{}</p>
        </div>
    </>
}
