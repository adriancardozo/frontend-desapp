import React, { useEffect, useState } from "react";
import ContentCard from "../component/ContentCard";
import ContentCardBody from "../component/ContentCardBody";
import LoggedinPage from "../component/LoggedinPage";
import '../styles/Activities.css'
import { activities } from "../services/activities";
import { useTranslation } from "react-i18next";

/* <FormattedNumber value={1000} style="currency" currency="ARS" /> */
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
                        <div><b>{t("hour")}: </b>{activity.hour}</div>
                        <div><b>{t("cryptoName")}: </b>{activity.cryptoCurrencyName}</div>
                        <div><b>{t("cryptoAmount")}: </b>{activity.cryptoCurrencyAmount}</div>
                        <div><b>{t("cryptoQuotation")}: </b>{activity.cryptoCurrencyQuotation}</div>
                        <div><b>{t("operationAmountARS")}: </b>{activity.arsOperationAmount}</div>
                        <div><b>{t("userName")}: </b>{activity.user.name}</div>
                        <div><b>{t("userLastname")}: </b>{activity.user.lastname}</div>
                        <div><b>{t("userNumberOfOperations")}:</b>{activity.user.operations}</div>
                        <div><b>{t("userReputation")}: </b>{activity.user.reputation}</div>
                    </ContentCardBody>
                </ContentCard>
            )}
        </LoggedinPage>
    )
}

export default Activities