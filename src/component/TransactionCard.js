import React from "react"
import ActivityCardContent from "./ActivityCardContent";
import BuyerInformation from "./BuyerInformation";
import ContentCard from "./ContentCard";
import ContentCardFooter from "./ContentCardFooter";
import SellerInformation from "./SellerInformation";
import TransactionActionSwitch from "./TransactionActionSwitch";
import TransactionStateSwitch from "./TransactionStateSwitch";
import "../styles/TransactionCard.css"

const TransactionCard = ({ transaction }) => {
    return(
        <ContentCard className="transaction-card">
            <ActivityCardContent activity={transaction.activity}>
                {transaction.seller ? <SellerInformation seller={transaction.seller} /> : <BuyerInformation buyer={transaction.buyer} />}
                <TransactionStateSwitch state={transaction.state} />
            </ActivityCardContent>
            <ContentCardFooter>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <TransactionActionSwitch {...{transaction}} />
                    </div>
                </div>
            </ContentCardFooter>
        </ContentCard>
    );
}

export default TransactionCard