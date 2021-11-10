import React, { useEffect, useState } from "react";
import ContentCard from "../component/ContentCard";
import ContentCardBody from "../component/ContentCardBody";
import LoggedinPage from "../component/LoggedinPage";
import { quotations } from "../services/quotations";

const Quotations = (props) => {
    const [cryptoQuotations, setCryptoQuotations] = useState([])

    useEffect(() => {
        quotations(setCryptoQuotations)
          .catch(() => props.history.push('/error'));
      }, [setCryptoQuotations, props.history]);

    return(
        <LoggedinPage>
            {cryptoQuotations.map((cryptoQuotation, i) =>
                <ContentCard key={`quotation-${i}`} className="activity-card">
                    <ContentCardBody>
                        <div><b>Cryptocurrency name: </b>{cryptoQuotation.name}</div>
                        <div><b>Quotation (ARS): </b>{cryptoQuotation.arPrice}</div>
                        <div><b>Quotation hour: </b>{cryptoQuotation.quotationHour}</div>
                    </ContentCardBody>
                </ContentCard>
            )}
        </LoggedinPage>
    )
}

export default Quotations