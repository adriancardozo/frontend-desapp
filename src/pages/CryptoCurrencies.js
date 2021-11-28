import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FormattedNumber } from "react-intl";
import ActivityModal from "../component/ActivityModal";
import ContentCard from "../component/ContentCard";
import ContentCardBody from "../component/ContentCardBody";
import ContentCardFooter from "../component/ContentCardFooter";
import ContentCardHeader from "../component/ContentCardHeader";
import FormattedDateTime from "../component/FormatedDateTime";
import LoggedinPage from "../component/LoggedinPage";
import ModalThrower from "../component/ModalThrower";
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
                    <ContentCardHeader>
                        <h4>{cryptoCurrency.name}</h4>
                    </ContentCardHeader>
                    <ContentCardBody>
                        {/* <div><b>{t("cryptoName")}: </b>{cryptoCurrency.name}</div> */}
                        {/* eslint-disable-next-line */}
                        <div><b>{t("quotationARS")}: </b><FormattedNumber value={cryptoCurrency.arPrice} style="currency" currency="ARS" /></div>
                        <div><b>{t("quotationHour")}: </b><FormattedDateTime value={cryptoCurrency.quotationHour} /></div>
                    </ContentCardBody>
                    <ContentCardFooter>
                        <div className="row justify-content-md-center">
                            <div className="col-md-auto">
                                <ModalThrower modal={ActivityModal} modalProps={{cryptoCurrency}}><button className="btn btn-primary">{t("buy")}</button></ModalThrower>
                                <ModalThrower modal={ActivityModal} modalProps={{cryptoCurrency, sell: true}}><button className="btn btn-secondary">{t("sell")}</button></ModalThrower>
                            </div>
                        </div>
                    </ContentCardFooter>
                </ContentCard>
            )}
        </LoggedinPage>
    )
}

export default CryptoCurrencies