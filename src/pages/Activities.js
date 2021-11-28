import React, { useEffect, useState } from "react";
import LoggedinPage from "../component/LoggedinPage";
import '../styles/Activities.css'
import { activities } from "../services/activities";
import ActivityCard from "../component/ActivityCard";

const Activities = (props) => {
    const [activityList, setActivityList] = useState([])

    useEffect(() => {
        activities(setActivityList)
          .catch(() => props.history.push('/error'));
      }, [setActivityList, props.history]);

    return(
        <LoggedinPage>
            {activityList.map((activity, i) =>
                <ActivityCard key={`activity-${i}`} {...{ activity }} />
            )}
        </LoggedinPage>
    )
}

export default Activities