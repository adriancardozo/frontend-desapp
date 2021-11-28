import React from "react"
import { useTranslation } from "react-i18next";
import { FormattedNumber } from "react-intl";

const UserInformation = ({ user }) => {
    const { t } = useTranslation()

    return(
        <div>
            <i><b>{t("userInformation")}</b></i>
            <ul>
                <li><b>{t("name")}:</b> {user.name} {user.lastname}</li>
                {/* eslint-disable-next-line */}
                <li><b>{t("operations")}:</b> <FormattedNumber value={user.operations} style="decimal" /></li>
                {/* eslint-disable-next-line */}
                <li><b>{t("reputation")}:</b> <FormattedNumber value={user.reputation} style="decimal" /></li>
            </ul>
        </div>
    );
}

export default UserInformation