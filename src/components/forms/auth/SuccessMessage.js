const SuccessMessage = ({ children, onClose }) => {
    return (
        <div className="d-flex justify-content-between alert alert-success">
            <p>{children}</p>
            <i className="fa-regular fa-x" style={{ cursor: "pointer" }} onClick={onClose}></i>
        </div>
    );
}

export default SuccessMessage;