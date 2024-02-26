import './Modal.css'
export const Modal = ({children}) => {
    return (
        <>
            <div className="modal-backdrop">
                <div className="modal">
                    {children}
                    <br/>
                </div>
            </div>
        </>
    )
}