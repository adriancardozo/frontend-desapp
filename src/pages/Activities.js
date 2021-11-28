import React, { useEffect, useState } from "react";
import ContentCard from "../component/ContentCard";
import ContentCardBody from "../component/ContentCardBody";
import LoggedinPage from "../component/LoggedinPage";
import '../styles/Activities.css'
import { activities } from "../services/activities";
import { useTranslation } from "react-i18next";
import { FormattedNumber } from "react-intl";
import FormattedDateTime from "../component/FormatedDateTime";

const Activities = (props) => {
    const [activityList, setActivityList] = useState([])
    const { t } = useTranslation()

    useEffect(() => {
        activities(setActivityList)
          .catch(() => props.history.push('/error'));
      }, [setActivityList, props.history]);

    return(
        <LoggedinPage>
            {activityList.map((activity, i) =>
                <ContentCard key={`activity-${i}`} className="activity-card">
                    <ContentCardBody>
                        <div><b>{t("hour")}: </b><FormattedDateTime value={activity.hour} /></div>
                        <div><b>{t("cryptoName")}: </b>{activity.cryptoCurrencyName}</div>
                        {/* eslint-disable-next-line */}
                        <div><b>{t("cryptoAmount")}: </b><FormattedNumber value={activity.cryptoCurrencyAmount} style="decimal" /></div>
                        {/* eslint-disable-next-line */}
                        <div><b>{t("cryptoQuotation")}: </b><FormattedNumber value={activity.cryptoCurrencyQuotation} style="currency" currency="ARS" /></div>
                        {/* eslint-disable-next-line */}
                        <div><b>{t("operationAmountARS")}: </b><FormattedNumber value={activity.arsOperationAmount} style="currency" currency="ARS" /></div>
                        <div><b>{t("userName")}: </b>{activity.user.name}</div>
                        <div><b>{t("userLastname")}: </b>{activity.user.lastname}</div>
                        {/* eslint-disable-next-line */}
                        <div><b>{t("userNumberOfOperations")}: </b><FormattedNumber value={activity.user.operations} style="decimal" /></div>
                        {/* eslint-disable-next-line */}
                        <div><b>{t("userReputation")}: </b><FormattedNumber value={activity.user.reputation} style="decimal" /></div>
                    </ContentCardBody>
                </ContentCard>
            )}
        </LoggedinPage>
    )
}

export default Activities