import React, { useContext } from "react"
import { SessionContext } from "../services/Session";
import TransactionAcceptButton from "./TransactionAcceptButton";
import TransactionCancelButton from "./TransactionCancelButton";
import TransactionConfirmReceiptButton from "./TransactionConfirmReceiptButton";
import TransactionMakeTransferButton from "./TransactionMakeTransferButton";
import TransactionRejectButton from "./TransactionRejectButton";

const TransactionActionSwitch = ({ transaction }) => {
    const { state: { user } } = useContext(SessionContext);
    
    const actions = () => {
        switch (transaction.state) {
            case "PENDING_ACCEPT":
                if(user.email === transaction.activity.user.email){
                    return(
                        <>
                            <TransactionAcceptButton idTransaction={transaction.id}/>
                            <TransactionRejectButton idTransaction={transaction.id}/>
                            <TransactionCancelButton idTransaction={transaction.id}/>
                        </>
                    )
                } else {
                    return <TransactionCancelButton idTransaction={transaction.id}/>
                }
            case "PENDING_TRANSFER":
                if(transaction.seller){
                    return(
                        <>
                            <TransactionMakeTransferButton idTransaction={transaction.id}/>
                            <TransactionCancelButton idTransaction={transaction.id}/>
                        </>
                    )
                } else {
                    return <TransactionCancelButton idTransaction={transaction.id}/>
                }
            case "PENDING_COMMIT":
                if(transaction.buyer){
                    return(
                        <>
                            <TransactionConfirmReceiptButton idTransaction={transaction.id}/>
                            <TransactionCancelButton idTransaction={transaction.id}/>
                        </>
                    )
                } else {
                    return <TransactionCancelButton idTransaction={transaction.id}/>
                }
            default:
                return <></>
        }
    }

    return(
        actions()
    );
}

export default TransactionActionSwitch