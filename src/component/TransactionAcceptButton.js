import React from "react"
import { useTranslation } from "react-i18next"
import { acceptTransaction } from "../services/acceptTransaction"
import TransactionActionButton from "./TransactionActionButton"

const TransactionAcceptButton = ({ idTransaction }) => {
    const { t } = useTranslation()

    const accept = () => {
        acceptTransaction(idTransaction)
    }

    return <TransactionActionButton onClick={accept} buttonType="success">{t("accept")}</TransactionActionButton>
}

export default TransactionAcceptButton