import React, { useEffect, useState } from "react";
import LoadingAnimation from "../component/LoadingAnimation";
import LoggedinPage from "../component/LoggedinPage";
import QuotationCard from "../component/QuotationCard";
import { quotations } from "../services/quotations";

const Quotations = (props) => {
    const [cryptoQuotations, setCryptoQuotations] = useState()

    useEffect(() => {
        quotations(setCryptoQuotations)
          .catch(() => props.history.push('/error'));
      }, [setCryptoQuotations, props.history]);

    return(
        <LoggedinPage>
            {
                cryptoQuotations ?
                cryptoQuotations.map((quotation, i) => <QuotationCard key={`quotation-${i}`} {...{quotation}}/>) :
                <LoadingAnimation />
            }
        </LoggedinPage>
    )
}

export default Quotations