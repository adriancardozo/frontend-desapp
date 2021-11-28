import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FormattedNumber } from "react-intl";
import ContentCard from "../component/ContentCard";
import ContentCardBody from "../component/ContentCardBody";
import FormattedDateTime from "../component/FormatedDateTime";
import LoggedinPage from "../component/LoggedinPage";
import { quotations } from "../services/quotations";

const Quotations = (props) => {
    const [cryptoQuotations, setCryptoQuotations] = useState([])
    const { t } = useTranslation()

    useEffect(() => {
        quotations(setCryptoQuotations)
          .catch(() => props.history.push('/error'));
      }, [setCryptoQuotations, props.history]);

    return(
        <LoggedinPage>
            {cryptoQuotations.map((cryptoQuotation, i) =>
                <ContentCard key={`quotation-${i}`} className="activity-card">
                    <ContentCardBody>
                        <div><b>{t("cryptoName")}: </b>{cryptoQuotation.name}</div>
                        {/* eslint-disable-next-line */}
                        <div><b>{t("quotationARS")}: </b><FormattedNumber value={cryptoQuotation.arPrice} style="currency" currency="ARS" /></div>
                        <div><b>{t("quotationHour")}: </b><FormattedDateTime value={cryptoQuotation.quotationHour} /></div>
                    </ContentCardBody>
                </ContentCard>
            )}
        </LoggedinPage>
    )
}

export default Quotations