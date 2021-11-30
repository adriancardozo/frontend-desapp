import React, { useEffect, useState } from "react";
import LoadingAnimation from "../component/LoadingAnimation";
import LoggedinPage from "../component/LoggedinPage";
import UserCard from "../component/UserCard";
import { users } from "../services/users";

const Users = (props) => {
    const [userList, setUserList] = useState()

    useEffect(() => {
        users(setUserList)
          .catch(() => props.history.push('/error'));
      }, [setUserList, props.history]);

    return(
        <LoggedinPage>
            {
                userList ?
                userList.map((user, i) => <UserCard key={`user-${i}`} {...{user}} />) :
                <LoadingAnimation />
            }
        </LoggedinPage>
    )
}

export default Users