import React from "react"
import { useTranslation } from "react-i18next"
import { makeTransferTransaction } from "../services/makeTransferTransaction"
import TransactionActionButton from "./TransactionActionButton"

const TransactionMakeTransferButton = ({ idTransaction }) => {
    const { t } = useTranslation()

    const makeTransfer = () => {
        makeTransferTransaction(idTransaction)
    }

    return <TransactionActionButton onClick={makeTransfer} buttonType="success">{t("makeTransfer")}</TransactionActionButton>
}

export default TransactionMakeTransferButton