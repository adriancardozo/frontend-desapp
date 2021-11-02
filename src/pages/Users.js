import React, { useEffect, useState } from "react";
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
                <div>{user.name}</div>
                <div>{user.lastname}</div>
                <div>{user.operations}</div>
                <div>{user.reputation}</div>
            </>)}
        </LoggedinPage>
    )
}

export default Users