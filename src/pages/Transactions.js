import React, { useContext } from "react"
import { useTranslation } from "react-i18next";
import ComponentList from "../component/ComponentList";
import LoggedinPage from "../component/LoggedinPage";
import TransactionCard from "../component/TransactionCard";
import { SessionContext } from "../services/Session";

const Transactions = () => {
    const { state } = useContext(SessionContext);
    const { t } = useTranslation()
    
    return(
        <LoggedinPage>
            <ComponentList emptyMessage={t("noTransactionsFound")} componentList={state.user.transactions.map((transaction, i) => <TransactionCard key={`transaction-${i}`} {...{ transaction }} />)} />
        </LoggedinPage>
    );
}

export default Transactions