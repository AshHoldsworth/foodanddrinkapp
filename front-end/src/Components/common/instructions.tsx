export const Instructions = ({instructions}: {instructions: any;}) => {

    for (const instruction in instructions) {
        console.log(instruction)
    }
    return <>
        <div className="sub-section"></div>
    </>
}
