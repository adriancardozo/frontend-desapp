import React, { useContext, useEffect, useState } from "react"
import { SessionContext } from "../services/Session";
import TransactionAcceptButton from "./TransactionAcceptButton";
import TransactionCancelButton from "./TransactionCancelButton";
import TransactionConfirmReceiptButton from "./TransactionConfirmReceiptButton";
import TransactionMakeTransferButton from "./TransactionMakeTransferButton";
import TransactionRejectButton from "./TransactionRejectButton";

const TransactionActionSwitch = ({ transaction }) => {
    const { state: { user } } = useContext(SessionContext);
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        setDisable(false)
    }, [transaction])

    const actions = () => {
        switch (transaction.state) {
            case "PENDING_ACCEPT":
                if(user.email === transaction.activity.user.email){
                    return(
                        <>
                            <TransactionAcceptButton {...{disable}} onClick={() => setDisable(true)} idTransaction={transaction.id}/>
                            <TransactionRejectButton {...{disable}} onClick={() => setDisable(true)} idTransaction={transaction.id}/>
                            <TransactionCancelButton {...{disable}} onClick={() => setDisable(true)} idTransaction={transaction.id}/>
                        </>
                    )
                } else {
                    return <TransactionCancelButton {...{disable}} onClick={() => setDisable(true)} idTransaction={transaction.id}/>
                }
            case "PENDING_TRANSFER":
                if(transaction.seller){
                    return(
                        <>
                            <TransactionMakeTransferButton {...{disable}} onClick={() => setDisable(true)} idTransaction={transaction.id}/>
                            <TransactionCancelButton {...{disable}} onClick={() => setDisable(true)} idTransaction={transaction.id}/>
                        </>
                    )
                } else {
                    return <TransactionCancelButton {...{disable}} onClick={() => setDisable(true)} idTransaction={transaction.id}/>
                }
            case "PENDING_COMMIT":
                if(transaction.buyer){
                    return(
                        <>
                            <TransactionConfirmReceiptButton {...{disable}} onClick={() => setDisable(true)} idTransaction={transaction.id}/>
                            <TransactionCancelButton {...{disable}} onClick={() => setDisable(true)} idTransaction={transaction.id}/>
                        </>
                    )
                } else {
                    return <TransactionCancelButton {...{disable}} onClick={() => setDisable(true)} idTransaction={transaction.id}/>
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