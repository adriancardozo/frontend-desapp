import React from "react"
import { useTranslation } from "react-i18next";

const SellerInformation = ({ seller }) => {
    const { t } = useTranslation()

    return(
        <div>
            <i><b>{t("sellerInformation")}</b></i>
            <ul>
                <li><b>{t("CVU")}: </b> {seller.cvu}</li>
            </ul>
        </div>
    );
}

export default SellerInformation