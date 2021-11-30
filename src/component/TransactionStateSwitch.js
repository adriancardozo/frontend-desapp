import React from "react"
import { useTranslation } from "react-i18next";

const TransactionStateSwitch = ({ state }) => {
    const { t } = useTranslation()

    const stateButton = () => {
        switch (state) {
            case "PENDING_ACCEPT":
                return <button className="btn btn-warning disabled">{t("pendingAccept")}</button>
            case "PENDING_TRANSFER":
                return <button className="btn btn-warning disabled">{t("pendingTransfer")}</button>
            case "PENDING_COMMIT":
                return <button className="btn btn-warning disabled">{t("pendingConfirm")}</button>
            case "COMPLETED":
                return <button className="btn btn-success disabled">{t("completed")}</button>
            case "REJECTED":
                return <button className="btn btn-danger disabled">{t("rejected")}</button>
            case "CANCELED":
                return <button className="btn btn-danger disabled">{t("canceled")}</button>
            default:
                return <></>
        }
    }

    return(
        <div>
            <i><b>{t("state")}</b></i>
            <ul>
                <li>{stateButton()}</li>
            </ul>
        </div>
    );
}

export default TransactionStateSwitch