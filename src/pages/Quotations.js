import React, { useEffect, useState } from "react";
import LoggedinPage from "../component/LoggedinPage";
import { useQuotations } from "../services/quotations";

const Quotations = (props) => {
    const { quotations } = useQuotations()
    const [cryptoQuotations, setCryptoQuotations] = useState([])

    useEffect(() => {
        quotations(setCryptoQuotations)
          .catch(() => props.history.push('/error'));
      }, [setCryptoQuotations]);

    return(
        <LoggedinPage>
            {cryptoQuotations.map(cryptoQuotation => <>
                <div>{cryptoQuotation.name}</div>
                <div>{cryptoQuotation.arPrice}</div>
                <div>{cryptoQuotation.quotationHour}</div>
            </>)}
        </LoggedinPage>
    )
}

export default Quotations