import React, { useEffect, useState } from "react";
import ContentCard from "../component/ContentCard";
import ContentCardBody from "../component/ContentCardBody";
import LoggedinPage from "../component/LoggedinPage";
import '../styles/Activities.css'
import { useActivities } from "../services/activities";

const Activities = (props) => {
    const { activities } = useActivities()
    const [activityList, setActivityList] = useState([])

    useEffect(() => {
        activities(setActivityList)
          .catch(() => props.history.push('/error'));
      }, [setActivityList]);

    return(
        <LoggedinPage>
            {activityList.map(activity =>
                <ContentCard className="activity-card">
                    <ContentCardBody>
                        <div><b>Hour: </b>{activity.hour}</div>
                        <div><b>Cryptocurrency name: </b>{activity.cryptoCurrencyName}</div>
                        <div><b>Cryptocurrency amount: </b>{activity.cryptoCurrencyAmount}</div>
                        <div><b>Cryptocurrency quotation: </b>{activity.cryptoCurrencyQuotation}</div>
                        <div><b>Operation amount (ARS): </b>{activity.arsOperationAmount}</div>
                        <div><b>User name: </b>{activity.user.name}</div>
                        <div><b>User lastname: </b>{activity.user.lastname}</div>
                        <div><b>User number of operations:</b>{activity.user.operations}</div>
                        <div><b>User reputation: </b>{activity.user.reputation}</div>
                    </ContentCardBody>
                </ContentCard>
            )}
        </LoggedinPage>
    )
}

export default Activities