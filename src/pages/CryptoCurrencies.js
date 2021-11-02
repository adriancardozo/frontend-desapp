import React, { useEffect, useState } from "react";
import { useCryptoCurrencies } from "../services/cryptoCurrencies";

const CryptoCurrencies = (props) => {
    const { cryptoCurrencies } = useCryptoCurrencies()
    const [cryptoCurrencyList, setCryptoCurrencyList] = useState([])

    useEffect(() => {
        cryptoCurrencies(setCryptoCurrencyList)
          .catch(() => props.history.push('/error'));
      }, [setCryptoCurrencyList]);

    return(cryptoCurrencyList.map(cryptoCurrency => <>
        <div>{cryptoCurrency.name}</div>
        <div>{cryptoCurrency.arPrice}</div>
        <div>{cryptoCurrency.quotationHour}</div>
    </>))
}

export default CryptoCurrencies