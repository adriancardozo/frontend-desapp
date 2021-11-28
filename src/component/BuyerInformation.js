import React from "react"
import { useTranslation } from "react-i18next";

const BuyerInformation = ({ buyer }) => {
    const { t } = useTranslation()

    return(
        <div>
            <i><b>{t("buyerInformation")}</b></i>
            <ul>
                <li><b>{t("walletAddress")}: </b> {buyer.walletAddress}</li>
            </ul>
        </div>
    );
}

export default BuyerInformation