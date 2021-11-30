import React from "react"
import { useTranslation } from "react-i18next"
import { confirmReceiptTransaction } from "../services/confirmReceiptTransaction"
import TransactionActionButton from "./TransactionActionButton"

const TransactionConfirmReceiptButton = ({ idTransaction }) => {
    const { t } = useTranslation()

    const confirmReceipt = () => {
        confirmReceiptTransaction(idTransaction)
    }

    return <TransactionActionButton onClick={confirmReceipt} buttonType="success">{t("confirmReceipt")}</TransactionActionButton>
}

export default TransactionConfirmReceiptButton