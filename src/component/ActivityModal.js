import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FormattedNumber } from 'react-intl';
import FormattedDateTime from './FormatedDateTime';
import Modal from './Modal';

const ActivityModal = ({ sell, cryptoCurrency, onClose }) => {
    const { t } = useTranslation()
    const [totalAmount, setTotalAmount] = useState(0.0)
    const activityTypeInformation = sell ? {activity: "sell", postKey: "postSaleActivity"} : {activity: "buy", postKey: "postBuyActivity"}

    const submit = (e) => {
        e.preventDefault()
        hide()
    }
  
    const hide = (e) => {
        let modalHide = document.getElementById("buy-modal-hide")
        let clickEvent = document.createEvent('MouseEvents')
        clickEvent.initEvent("click", true, true);
        modalHide.dispatchEvent(clickEvent)
    }

    const changeAmount = (e) => {
        setTotalAmount(e.target.value * cryptoCurrency.arPrice)
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
                        <input required onChange={changeAmount} type="number" step={0.01} min={0.01} className="form-control"/>
                    </div>
                    <br />
                    <br />
                    <div className="form-group">
                        <div style={{textAlign: "right"}}>
                            {/* eslint-disable-next-line */}
                            <label><i><b>{t("totalARSAmount")}: <FormattedNumber value={totalAmount} style="currency" currency="ARS" /></b></i></label>
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