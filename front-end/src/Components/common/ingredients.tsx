interface Ingredients {
    ingredients: string[];
}

export const Ingredients: React.FC<Ingredients> = ({ ingredients }) => {
    return <>
        <div id="sub-section">
                <ul>
                    {ingredients.map((ingredient: any, index: number) => {
                        return <li key={index}>{ingredient}</li>
                    })}
                </ul>
        </div>
    </>
}
