import React from "react"
import { useTranslation } from "react-i18next"
import { confirmReceiptTransaction } from "../services/confirmReceiptTransaction"
import TransactionActionButton from "./TransactionActionButton"

const TransactionConfirmReceiptButton = ({ idTransaction, disable, onClick }) => {
    const { t } = useTranslation()

    const confirmReceipt = () => {
        onClick()
        confirmReceiptTransaction(idTransaction)
    }

    return <TransactionActionButton {...{disable}} onClick={confirmReceipt} buttonType="success">{t("confirmReceipt")}</TransactionActionButton>
}

export default TransactionConfirmReceiptButton