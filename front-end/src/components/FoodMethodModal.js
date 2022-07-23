import '../css/MethodModal.css'

export const FoodMethodModal = ({ method, setOpenModal }) => {
    const handleClose = () => {
        setOpenModal(false)
    }
    
    return (
        <>
            <div className="MethodModal">
                <div className="background">
                    <div className="container">
                        <div id="close-button"><span onClick={handleClose}>x</span></div>
                        <div id="heading">Method<hr /></div>
                        {method.map((step, index) => (
                            <div id="step" key={index}>{"Step " + (index + 1) + ": " + step}<hr /></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
