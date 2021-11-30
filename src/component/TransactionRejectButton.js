import React from "react"
import { useTranslation } from "react-i18next"
import { rejectTransaction } from "../services/rejectTransaction"
import TransactionActionButton from "./TransactionActionButton"

const TransactionRejectButton = ({ idTransaction }) => {
    const { t } = useTranslation()

    const reject = () => {
        rejectTransaction(idTransaction)
    }

    return <TransactionActionButton onClick={reject} buttonType="warning">{t("reject")}</TransactionActionButton>
}

export default TransactionRejectButton