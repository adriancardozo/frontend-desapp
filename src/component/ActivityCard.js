import React, { useContext } from "react"
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { SessionContext } from "../services/Session";
import { startTransaction } from "../services/startTransaction";
import ActivityCardContent from "./ActivityCardContent";
import ContentCard from "./ContentCard";
import ContentCardFooter from "./ContentCardFooter";
import ModalThrower from "./ModalThrower";
import YesNoModal from "./YesNoModal";

const ActivityCard = ({ activity }) => {
    const { state: { user } } = useContext(SessionContext);
    const { t } = useTranslation()
    const history = useHistory()

    const acceptStartTransaction = () => {
        startTransaction({ activityId: activity.id }, (transaction) => history.push("/transaction", {transaction}))
    }

    return(
        <ContentCard className="activity-card">
            <ActivityCardContent {...{activity}} />
            {
                user.email !== activity.user.email && 
                <ContentCardFooter>
                    <ModalThrower modal={YesNoModal} modalProps={{message: t("startTransaction?"), accept: acceptStartTransaction}}><button className="btn btn-outline-primary">{t("startTransaction")}</button></ModalThrower>
                </ContentCardFooter>
            }
        </ContentCard>
    );
}

export default ActivityCard