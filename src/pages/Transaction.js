import React from "react"
import { useTranslation } from "react-i18next";
import ActivityCardContent from "../component/ActivityCardContent";
import BuyerInformation from "../component/BuyerInformation";
import ContentCard from "../component/ContentCard";
import ContentCardFooter from "../component/ContentCardFooter";
import LoggedinPage from "../component/LoggedinPage";
import SellerInformation from "../component/SellerInformation";

const Transaction = ({ transaction }) => {
    const { t } = useTranslation()
    
    return(
        <LoggedinPage>
            <ContentCard>
                <ActivityCardContent activity={transaction.activity}>
                    {transaction.activity.type === "BUY" ? <SellerInformation seller={transaction.seller} /> : <BuyerInformation buyer={transaction.buyer} />}
                </ActivityCardContent>
                <ContentCardFooter>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            {
                                transaction.activity.type === "BUY" ? 
                                <button className="btn btn-outline-primary">{t("makeTransfer")}</button> :
                                <button className="btn btn-outline-secondary">{t("confirmReceipt")}</button>
                            }
                            <button className="btn btn-outline-danger">{t("cancel")}</button>
                        </div>
                    </div>
                </ContentCardFooter>
            </ContentCard>
        </LoggedinPage>
    );
}

export default Transaction