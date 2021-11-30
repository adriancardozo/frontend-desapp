import React from "react"
import { useTranslation } from "react-i18next"
import { acceptTransaction } from "../services/acceptTransaction"
import TransactionActionButton from "./TransactionActionButton"

const TransactionAcceptButton = ({ idTransaction, disable, onClick }) => {
    const { t } = useTranslation()

    const accept = () => {
        onClick()
        acceptTransaction(idTransaction)
    }

    return <TransactionActionButton {...{disable}} onClick={accept} buttonType="success">{t("accept")}</TransactionActionButton>
}

export default TransactionAcceptButton