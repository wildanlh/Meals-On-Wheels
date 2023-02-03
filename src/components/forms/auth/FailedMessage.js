const FailedMessage = ({ children, onClose }) => {
    return (
        <div className="d-flex justify-content-between alert alert-danger" >
            <p>{children}</p>
            <i className="fa-regular fa-x" style={{ cursor: " pointer" }} onClick={onClose}></i>
        </div >
    );
}

export default FailedMessage;