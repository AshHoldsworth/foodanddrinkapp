interface IInstructions {
    instructions: string[];
}

export const Instructions: React.FC<IInstructions> = ({ instructions }) => {
    return <>
        <div id="sub-section">
            <ol>
                {instructions.map((instruction: any, index: number) => {
                    return <li key={index}>{instruction}</li>
                })}
            </ol>
        </div>
    </>
}
