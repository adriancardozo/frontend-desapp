import React from "react"
import { useTranslation } from "react-i18next";
import ActivityCardContent from "./ActivityCardContent";
import ContentCard from "./ContentCard";
import ContentCardFooter from "./ContentCardFooter";
import ModalThrower from "./ModalThrower";
import YesNoModal from "./YesNoModal";

const ActivityCard = ({ activity }) => {
    const { t } = useTranslation()

    return(
        <ContentCard className="activity-card">
            <ActivityCardContent {...{activity}} />
            <ContentCardFooter>
                <ModalThrower modal={YesNoModal} modalProps={{message: t("startTransaction?")}}><button className="btn btn-outline-primary">{t("startTransaction")}</button></ModalThrower>
            </ContentCardFooter>
        </ContentCard>
    );
}

export default ActivityCard