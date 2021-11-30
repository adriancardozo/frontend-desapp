import React from "react"
import "../styles/TransactionActionButton.css"

const TransactionActionButton = ({ onClick, disable, buttonType, children }) => {
    return(
        <button onClick={onClick} className={`btn btn-outline-${buttonType} ${disable ? "disabled" : ""} transaction-action-button`}>{children}</button>
    );
}

export default TransactionActionButton