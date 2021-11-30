import React from "react"
import { useTranslation } from "react-i18next";
import { FormattedNumber } from "react-intl";
import ContentCard from "./ContentCard";
import ContentCardBody from "./ContentCardBody";
import ContentCardHeader from "./ContentCardHeader";

const UserCard = ({ user }) => {
    const { t } = useTranslation()

    return(
        <ContentCard className="activity-card">
            <ContentCardHeader>
                <h3>{user.name} {user.lastname}</h3>
            </ContentCardHeader>
            <ContentCardBody>
                {/* eslint-disable-next-line */}
                <div><b>{t("operations")}: </b><FormattedNumber value={user.operations} style="decimal" /></div>
                {/* eslint-disable-next-line */}
                <div><b>{t("reputation")}: </b><FormattedNumber value={user.reputation} style="decimal" /></div>
            </ContentCardBody>
        </ContentCard>
    );
}

export default UserCard