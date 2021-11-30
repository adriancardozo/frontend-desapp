import React from "react"
import { useTranslation } from "react-i18next";
import { FormattedNumber } from "react-intl";
import ContentCard from "./ContentCard";
import ContentCardBody from "./ContentCardBody";
import ContentCardHeader from "./ContentCardHeader";
import FormattedDateTime from "./FormatedDateTime";

const QuotationCard = ({ quotation }) => {
    const { t } = useTranslation()

    return(
        <ContentCard className="activity-card">
            <ContentCardHeader>
                <h4>{quotation.name}</h4>
            </ContentCardHeader>
            <ContentCardBody>
                {/* eslint-disable-next-line */}
                <div><b>{t("quotationARS")}: </b><FormattedNumber value={quotation.arPrice} style="currency" currency="ARS" /></div>
                <div><b>{t("quotationHour")}: </b><FormattedDateTime value={quotation.quotationHour} /></div>
            </ContentCardBody>
        </ContentCard>
    );
}

export default QuotationCard