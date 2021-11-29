import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FormattedNumber } from 'react-intl';
import { useHistory } from 'react-router';
import { createActivity } from '../services/createActivity';
import FormattedDateTime from './FormatedDateTime';
import Modal from './Modal';

const ActivityModal = ({ sell, cryptoCurrency, onClose }) => {
    const { t } = useTranslation()
    const history = useHistory()
    const [amounts, setAmounts] = useState({amount: 0.0, amountARS: 0.0})
    const activityTypeInformation = sell ? {activity: "sell", postKey: "postSaleActivity"} : {activity: "buy", postKey: "postBuyActivity"}

    const submit = (e) => {
        e.preventDefault()
        createActivity({
            cryptoName: cryptoCurrency.name,
            cryptoQuotation: cryptoCurrency.arPrice,
            amount: amounts.amount,
            type: sell ? "SALE" : "BUY" 
        }, () => {
            hide()
            history.push("/activities")
        })
    }
  
    const hide = (e) => {
        let modalHide = document.getElementById("buy-modal-hide")
        let clickEvent = document.createEvent('MouseEvents')
        clickEvent.initEvent("click", true, true);
        modalHide.dispatchEvent(clickEvent)
    }

    const changeAmount = (e) => {
        setAmounts({amount: e.target.value, amountARS: e.target.value * cryptoCurrency.arPrice})
    }

    return(
        <Modal onClose={onClose} backdrop={true}>
            <div className="modal-header">
                <div className="col">
                    <div className="row">
                        <h4 className="modal-title">{t(activityTypeInformation.activity)} <i>{cryptoCurrency.name}</i></h4>
                    </div>
                    <div className="row">    
                        <div className="form-group">
                            {/* eslint-disable-next-line */}
                            <label>{t("currentQuotation")}: <FormattedNumber value={ cryptoCurrency.arPrice } style="currency" currency="ARS" /></label>
                            <label><i>{t("lastUpdate")}: <FormattedDateTime value={cryptoCurrency.quotationHour} /></i></label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-body">
                <form id="buyForm" onSubmit={submit}>
                    <div className="form-group">
                        <label>{t("amount")}</label>
                        <input required value={amounts.amount} onChange={changeAmount} type="number" step={0.01} min={0.01} className="form-control"/>
                    </div>
                    <br />
                    <br />
                    <div className="form-group">
                        <div style={{textAlign: "right"}}>
                            {/* eslint-disable-next-line */}
                            <label><i><b>{t("totalARSAmount")}: <FormattedNumber value={amounts.amountARS} style="currency" currency="ARS" /></b></i></label>
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="submit" form="buyForm" className="btn btn-primary">{t(activityTypeInformation.postKey)}</button>
                <button type="button" className="btn btn-secondary hide-modal">{t("cancel")}</button>
            </div>
            <div id="buy-modal-hide" className="hide-modal" style={{display:"none"}}></div>
        </Modal>
    );
}

export default ActivityModal