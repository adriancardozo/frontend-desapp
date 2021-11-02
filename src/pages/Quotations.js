import React, { useEffect, useState } from "react";
import ContentCard from "../component/ContentCard";
import ContentCardBody from "../component/ContentCardBody";
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
                <ContentCard className="activity-card">
                    <ContentCardBody>
                        <div><b>Cryptocurrency name: </b>{cryptoQuotation.name}</div>
                        <div><b>Quotation (ARS): </b>{cryptoQuotation.arPrice}</div>
                        <div><b>Quotation hour: </b>{cryptoQuotation.quotationHour}</div>
                    </ContentCardBody>
                </ContentCard>
            </>)}
        </LoggedinPage>
    )
}

export default Quotations