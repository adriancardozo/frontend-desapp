import React, { useContext } from "react"
import { useTranslation } from "react-i18next";
import { SessionContext } from "../services/Session";
import ActivityCardContent from "./ActivityCardContent";
import ContentCard from "./ContentCard";
import ContentCardFooter from "./ContentCardFooter";
import ModalThrower from "./ModalThrower";
import YesNoModal from "./YesNoModal";

const ActivityCard = ({ activity }) => {
    const { state: { user } } = useContext(SessionContext);
    const { t } = useTranslation()

    return(
        <ContentCard className="activity-card">
            <ActivityCardContent {...{activity}} />
            {
                user.email !== activity.user.email && 
                <ContentCardFooter>
                    <ModalThrower modal={YesNoModal} modalProps={{message: t("startTransaction?")}}><button className="btn btn-outline-primary">{t("startTransaction")}</button></ModalThrower>
                </ContentCardFooter>
            }
        </ContentCard>
    );
}

export default ActivityCard