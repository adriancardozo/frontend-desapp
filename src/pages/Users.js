import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ContentCard from "../component/ContentCard";
import ContentCardBody from "../component/ContentCardBody";
import LoggedinPage from "../component/LoggedinPage";
import { users } from "../services/users";

const Users = (props) => {
    const [userList, setUserList] = useState([])
    const { t } = useTranslation()

    useEffect(() => {
        users(setUserList)
          .catch(() => props.history.push('/error'));
      }, [setUserList, props.history]);

    return(
        <LoggedinPage>
            {userList.map((user, i) =>
                <ContentCard key={`user-${i}`} className="activity-card">
                    <ContentCardBody>
                        <div><b>{t("name")}: </b>{user.name}</div>
                        <div><b>{t("lastname")}: </b>{user.lastname}</div>
                        <div><b>{t("numberOfOperations")}: </b>{user.operations}</div>
                        <div><b>{t("reputation")}: </b>{user.reputation}</div>
                    </ContentCardBody>
                </ContentCard>
            )}
        </LoggedinPage>
    )
}

export default Users