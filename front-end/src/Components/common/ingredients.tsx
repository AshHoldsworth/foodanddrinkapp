interface Ingredients {
    ingredients: [];
}

export const Ingredients: React.FC<Ingredients> = ({ ingredients }) => {

    for (const ingredient in ingredients) {
        console.log(ingredient)
    }

    return <>
        <div id="sub-section">
            <p>{}</p>
        </div>
    </>
}
