import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ComponentList from "../component/ComponentList";
import LoadingAnimation from "../component/LoadingAnimation";
import LoggedinPage from "../component/LoggedinPage";
import QuotationCard from "../component/QuotationCard";
import { quotations } from "../services/quotations";

const Quotations = (props) => {
    const [cryptoQuotations, setCryptoQuotations] = useState()
    const { t } = useTranslation()

    useEffect(() => {
        quotations(setCryptoQuotations)
          .catch(() => props.history.push('/error'));
      }, [setCryptoQuotations, props.history]);

    return(
        <LoggedinPage>
            {
                cryptoQuotations ?
                <ComponentList emptyMessage={t("noQuotationsFound")} componentList={cryptoQuotations.map((quotation, i) => <QuotationCard key={`quotation-${i}`} {...{quotation}}/>)} /> :
                <LoadingAnimation />
            }
        </LoggedinPage>
    )
}

export default Quotations