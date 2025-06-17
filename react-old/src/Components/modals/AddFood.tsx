import "../../css/modal.css"
import "../../css/global.css"

interface IAddFood {
    onClose: () => void
}

export const AddFood: React.FC<IAddFood> = ({ onClose }: IAddFood) => {
    const onClick = () => {
        console.log("Add Food button clicked")
        // Logic to handle adding food goes here
    }

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <div className="modal-header">
                    <h2>Add Food</h2>
                </div>
                <div className="modal-body">
                    <p>Food form goes here</p>
                </div>
                <div className="modal-footer">
                    <button className="btn" onClick={onClick}>
                        Save
                    </button>
                    <button className="btn" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
