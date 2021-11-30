import React from "react"
import { useTranslation } from "react-i18next"
import { cancelTransaction } from "../services/cancelTransaction"
import TransactionActionButton from "./TransactionActionButton"

const TransactionCancelButton = ({ idTransaction }) => {
    const { t } = useTranslation()

    const cancel = () => {
        cancelTransaction(idTransaction)
    }

    return <TransactionActionButton onClick={cancel} buttonType="danger">{t("cancel")}</TransactionActionButton>
}

export default TransactionCancelButton