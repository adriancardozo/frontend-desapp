import React from "react"
import { useTranslation } from "react-i18next";
import { FormattedNumber } from "react-intl";
import ContentCardBody from "./ContentCardBody";
import ContentCardHeader from "./ContentCardHeader";
import FormattedDateTime from "./FormatedDateTime";
import UserInformation from "./UserInformation";

const ActivityCardContent = ({ activity, children }) => {
    const { t } = useTranslation()

    return(
        <>
            <ContentCardHeader>
                <div className="row">
                    <div className="col-md-auto">
                        <h3>{activity.cryptoCurrencyName}</h3>
                        <div className="row">    
                            <div className="form-group">
                                {/* eslint-disable-next-line */}
                                <label>{t("quotation")}: <FormattedNumber value={ activity.cryptoCurrencyQuotation } style="currency" currency="ARS" /></label>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {
                            activity.type === "sale" ?
                            <button className="btn btn-secondary disabled">{t("typeSale")}</button> :
                            <button className="btn btn-primary disabled">{t("typeBuy")}</button>
                        }
                    </div>
                </div>
            </ContentCardHeader>
            <ContentCardBody>
                <div><i>{t("postTime")}: <FormattedDateTime value={activity.hour} /></i></div>
                <br />
                <UserInformation user={activity.user} />
                {/* eslint-disable-next-line */}
                <div><b>{t("amountToBuy")}: </b><FormattedNumber value={activity.cryptoCurrencyAmount} style="decimal" /></div>
                {/* eslint-disable-next-line */}
                <div><b>{t("operationAmountARS")}: </b><FormattedNumber value={activity.arsOperationAmount} style="currency" currency="ARS" /></div>
                {children}
            </ContentCardBody>
        </>
    );
}

export default ActivityCardContent