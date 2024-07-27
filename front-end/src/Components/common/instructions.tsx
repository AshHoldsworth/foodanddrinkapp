interface IInstructions {
    instructions: string[];
}

export const Instructions: React.FC<IInstructions> = ({ instructions }) => {

    for (const instruction in instructions) {
        console.log(instruction)
    }
    return <>
        <div id="sub-section">
            <p>{}</p>
        </div>
    </>
}
