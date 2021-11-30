import React from "react"
import { useTranslation } from "react-i18next"
import { cancelTransaction } from "../services/cancelTransaction"
import TransactionActionButton from "./TransactionActionButton"

const TransactionCancelButton = ({ idTransaction, disable, onClick }) => {
    const { t } = useTranslation()

    const cancel = () => {
        onClick()
        cancelTransaction(idTransaction)
    }

    return <TransactionActionButton {...{disable}} onClick={cancel} buttonType="danger">{t("cancel")}</TransactionActionButton>
}

export default TransactionCancelButton