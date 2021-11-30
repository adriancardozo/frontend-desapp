import React from "react"
import LoggedinPage from "../component/LoggedinPage";
import TransactionCard from "../component/TransactionCard";

const Transaction = ({ history: { location: { state: { transaction } } } }) => {
    return(
        <LoggedinPage>
            <TransactionCard {...{ transaction }} />
        </LoggedinPage>
    );
}

export default Transaction