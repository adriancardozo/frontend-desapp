import React from "react"
import { useTranslation } from "react-i18next"
import { rejectTransaction } from "../services/rejectTransaction"
import TransactionActionButton from "./TransactionActionButton"

const TransactionRejectButton = ({ idTransaction, disable, onClick }) => {
    const { t } = useTranslation()

    const reject = () => {
        onClick()
        rejectTransaction(idTransaction)
    }

    return <TransactionActionButton {...{disable}} onClick={reject} buttonType="warning">{t("reject")}</TransactionActionButton>
}

export default TransactionRejectButton