import React from "react"
import { useTranslation } from "react-i18next";
import { FormattedNumber } from "react-intl";
import ActivityModal from "./ActivityModal";
import ContentCard from "./ContentCard";
import ContentCardBody from "./ContentCardBody";
import ContentCardFooter from "./ContentCardFooter";
import ContentCardHeader from "./ContentCardHeader";
import FormattedDateTime from "./FormatedDateTime";
import ModalThrower from "./ModalThrower";

const CryptocurrencyCard = ({ cryptocurrency }) => {
    const { t } = useTranslation()
    
    return(
        <ContentCard className="activity-card">
            <ContentCardHeader>
                <h4>{cryptocurrency.name}</h4>
            </ContentCardHeader>
            <ContentCardBody>
                {/* eslint-disable-next-line */}
                <div><b>{t("quotationARS")}: </b><FormattedNumber value={cryptocurrency.arPrice} style="currency" currency="ARS" /></div>
                <div><b>{t("quotationHour")}: </b><FormattedDateTime value={cryptocurrency.quotationHour} /></div>
            </ContentCardBody>
            <ContentCardFooter>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <ModalThrower modal={ActivityModal} modalProps={{cryptocurrency}}><button className="btn btn-primary">{t("buy")}</button></ModalThrower>
                        <ModalThrower modal={ActivityModal} modalProps={{cryptocurrency, sell: true}}><button className="btn btn-secondary">{t("sell")}</button></ModalThrower>
                    </div>
                </div>
            </ContentCardFooter>
        </ContentCard>
    );
}

export default CryptocurrencyCard