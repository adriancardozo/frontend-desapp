import React, { useEffect, useState } from "react";
import LoggedinPage from "../component/LoggedinPage";
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
            {activityList.map(activity => <>
                <div>{activity.hour}</div>
                <div>{activity.cryptoCurrencyName}</div>
                <div>{activity.cryptoCurrencyAmount}</div>
                <div>{activity.cryptoCurrencyQuotation}</div>
                <div>{activity.arsOperationAmount}</div>
                <div>{activity.user.name}</div>
                <div>{activity.user.lastname}</div>
                <div>{activity.user.operations}</div>
                <div>{activity.user.reputation}</div>
            </>)}
        </LoggedinPage>
    )
}

export default Activities