import React, { useEffect, useState } from "react";
import ContentCard from "../component/ContentCard";
import ContentCardBody from "../component/ContentCardBody";
import Header from "../component/Header";
import LoggedinPage from "../component/LoggedinPage";
import { useCryptoCurrencies } from "../services/cryptoCurrencies";

const CryptoCurrencies = (props) => {
    const { cryptoCurrencies } = useCryptoCurrencies()
    const [cryptoCurrencyList, setCryptoCurrencyList] = useState([])

    useEffect(() => {
        cryptoCurrencies(setCryptoCurrencyList)
          .catch(() => props.history.push('/error'));
      }, [setCryptoCurrencyList]);

    return(
        <LoggedinPage>
            {cryptoCurrencyList.map(cryptoCurrency =>
                <ContentCard className="activity-card">
                    <ContentCardBody>
                        <div><b>Cryptocurrency name: </b>{cryptoCurrency.name}</div>
                        <div><b>Quotaton (ARS): </b>{cryptoCurrency.arPrice}</div>
                        <div><b>Quotation hour: </b>{cryptoCurrency.quotationHour}</div>
                    </ContentCardBody>
                </ContentCard>
            )}
        </LoggedinPage>
    )
}

export default CryptoCurrencies