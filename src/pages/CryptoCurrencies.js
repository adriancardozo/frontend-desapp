import React, { useEffect, useState } from "react";
import ContentCard from "../component/ContentCard";
import ContentCardBody from "../component/ContentCardBody";
import LoggedinPage from "../component/LoggedinPage";
import { cryptoCurrencies } from "../services/cryptoCurrencies";

const CryptoCurrencies = (props) => {
    const [cryptoCurrencyList, setCryptoCurrencyList] = useState([])

    useEffect(() => {
        cryptoCurrencies(setCryptoCurrencyList)
          .catch(() => props.history.push('/error'));
      }, [setCryptoCurrencyList, props.history]);

    return(
        <LoggedinPage>
            {cryptoCurrencyList.map((cryptoCurrency, i) =>
                <ContentCard key={`cryptocurrency-${i}`} className="activity-card">
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