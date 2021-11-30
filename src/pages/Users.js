import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ComponentList from "../component/ComponentList";
import LoadingAnimation from "../component/LoadingAnimation";
import LoggedinPage from "../component/LoggedinPage";
import UserCard from "../component/UserCard";
import { users } from "../services/users";

const Users = (props) => {
    const [userList, setUserList] = useState()
    const { t } = useTranslation()

    useEffect(() => {
        users(setUserList)
          .catch(() => props.history.push('/error'));
      }, [setUserList, props.history]);

    return(
        <LoggedinPage>
            {
                userList ?
                <ComponentList emptyMessage={t("noUsersFound")} componentList={userList.map((user, i) => <UserCard key={`user-${i}`} {...{user}} />)} /> :
                <LoadingAnimation />
            }
        </LoggedinPage>
    )
}

export default Users