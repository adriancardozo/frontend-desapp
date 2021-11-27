import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ContentCard from "../component/ContentCard";
import ContentCardBody from "../component/ContentCardBody";
import LoggedinPage from "../component/LoggedinPage";
import { cryptoCurrencies } from "../services/cryptoCurrencies";

const CryptoCurrencies = (props) => {
    const [cryptoCurrencyList, setCryptoCurrencyList] = useState([])
    const { t } = useTranslation()

    useEffect(() => {
        cryptoCurrencies(setCryptoCurrencyList)
          .catch(() => props.history.push('/error'));
      }, [setCryptoCurrencyList, props.history]);

    return(
        <LoggedinPage>
            {cryptoCurrencyList.map((cryptoCurrency, i) =>
                <ContentCard key={`cryptocurrency-${i}`} className="activity-card">
                    <ContentCardBody>
                        <div><b>{t("cryptoName")}: </b>{cryptoCurrency.name}</div>
                        <div><b>{t("quotationARS")}: </b>{cryptoCurrency.arPrice}</div>
                        <div><b>{t("quotationHour")}: </b>{cryptoCurrency.quotationHour}</div>
                    </ContentCardBody>
                </ContentCard>
            )}
        </LoggedinPage>
    )
}

export default CryptoCurrencies