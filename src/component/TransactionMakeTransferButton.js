import React from "react"
import { useTranslation } from "react-i18next"
import { makeTransferTransaction } from "../services/makeTransferTransaction"
import TransactionActionButton from "./TransactionActionButton"

const TransactionMakeTransferButton = ({ idTransaction, disable, onClick }) => {
    const { t } = useTranslation()

    const makeTransfer = () => {
        onClick()
        makeTransferTransaction(idTransaction)
    }

    return <TransactionActionButton {...{disable}} onClick={makeTransfer} buttonType="success">{t("makeTransfer")}</TransactionActionButton>
}

export default TransactionMakeTransferButton