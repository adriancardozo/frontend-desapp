import React from "react"
import "../styles/TransactionActionButton.css"

const TransactionActionButton = ({ onClick, buttonType, children }) => {
    return(
        <button onClick={onClick} className={`btn btn-outline-${buttonType} transaction-action-button`}>{children}</button>
    );
}

export default TransactionActionButton