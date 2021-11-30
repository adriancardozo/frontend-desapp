import React, { useEffect, useState } from "react";
import CryptocurrencyCard from "../component/CryptocurrencyCard";
import LoadingAnimation from "../component/LoadingAnimation";
import LoggedinPage from "../component/LoggedinPage";
import { cryptoCurrencies } from "../services/cryptoCurrencies";

const CryptoCurrencies = (props) => {
    const [cryptoCurrencyList, setCryptoCurrencyList] = useState()

    useEffect(() => {
        cryptoCurrencies(setCryptoCurrencyList)
          .catch(() => props.history.push('/error'));
      }, [setCryptoCurrencyList, props.history]);

    return(
        <LoggedinPage>
            {
                cryptoCurrencyList ? 
                cryptoCurrencyList.map((cryptocurrency, i) => <CryptocurrencyCard key={`cryptocurrency-${i}`} {...{cryptocurrency}} />) :
                <LoadingAnimation />
            }
        </LoggedinPage>
    )
}

export default CryptoCurrencies