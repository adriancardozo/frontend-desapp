import React, { useEffect, useState } from "react";
import { useUsers } from "../services/users";

const Users = (props) => {
    const { users } = useUsers()
    const [userList, setUserList] = useState([])

    useEffect(() => {
        users(setUserList)
          .catch(() => props.history.push('/error'));
      }, [setUserList]);

    return(userList.map(user => <>
        <div>{user.name}</div>
        <div>{user.lastname}</div>
        <div>{user.operations}</div>
        <div>{user.reputation}</div>
    </>))
}

export default Users