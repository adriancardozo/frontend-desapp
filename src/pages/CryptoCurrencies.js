import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ComponentList from "../component/ComponentList";
import CryptocurrencyCard from "../component/CryptocurrencyCard";
import LoadingAnimation from "../component/LoadingAnimation";
import LoggedinPage from "../component/LoggedinPage";
import { cryptoCurrencies } from "../services/cryptoCurrencies";

const CryptoCurrencies = (props) => {
    const [cryptoCurrencyList, setCryptoCurrencyList] = useState()
    const { t } = useTranslation()

    useEffect(() => {
        cryptoCurrencies(setCryptoCurrencyList)
          .catch(() => props.history.push('/error'));
      }, [setCryptoCurrencyList, props.history]);

    return(
        <LoggedinPage>
            {
                cryptoCurrencyList ? 
                <ComponentList emptyMessage={t("noCryptocurrenciesFound")} componentList={cryptoCurrencyList.map((cryptocurrency, i) => <CryptocurrencyCard key={`cryptocurrency-${i}`} {...{cryptocurrency}} />)} /> :
                <LoadingAnimation />
            }
        </LoggedinPage>
    )
}

export default CryptoCurrencies