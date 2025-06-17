import "../../css/global.css"

interface IOpenAddFoodModal {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export const OpenAddFoodModal: React.FC<IOpenAddFoodModal> = ({ setVisible }) => {
    return (
        <button className="floating-btn" onClick={() => setVisible(true)}>+</button>
    );
}
