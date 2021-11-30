import React, { useContext } from "react"
import LoggedinPage from "../component/LoggedinPage";
import TransactionCard from "../component/TransactionCard";
import { SessionContext } from "../services/Session";

const Transactions = () => {
    const { state } = useContext(SessionContext);
    
    return(
        <LoggedinPage>
            {state.user.transactions.map((transaction, i) => <TransactionCard key={`transaction-${i}`} {...{ transaction }} />)}
        </LoggedinPage>
    );
}

export default Transactions