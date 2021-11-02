import React, { useEffect, useState } from "react";
import ContentCard from "../component/ContentCard";
import ContentCardBody from "../component/ContentCardBody";
import LoggedinPage from "../component/LoggedinPage";
import { useUsers } from "../services/users";

const Users = (props) => {
    const { users } = useUsers()
    const [userList, setUserList] = useState([])

    useEffect(() => {
        users(setUserList)
          .catch(() => props.history.push('/error'));
      }, [setUserList]);

    return(
        <LoggedinPage>
            {userList.map(user => <>
                <ContentCard className="activity-card">
                    <ContentCardBody>
                        <div><b>Name: </b>{user.name}</div>
                        <div><b>Lastname: </b>{user.lastname}</div>
                        <div><b>Number of operations: </b>{user.operations}</div>
                        <div><b>Reputation: </b>{user.reputation}</div>
                    </ContentCardBody>
                </ContentCard>
            </>)}
        </LoggedinPage>
    )
}

export default Users