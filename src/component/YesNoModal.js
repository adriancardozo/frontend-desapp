import React from 'react'
import { useTranslation } from 'react-i18next';
import Modal from './Modal';

const YesNoModal = ({ accept, cancel, message, onClose }) => {
    const { t } = useTranslation()

    return(
        <Modal backdrop={true} onClose={onClose}>
            <div className="modal-body">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <h3>{message}</h3>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button onClick={accept} type="button" className="btn btn-primary hide-modal">{t("yes")}</button>
                <button onClick={cancel} type="button" className="btn btn-secondary hide-modal">{t("no")}</button>
            </div>
        </Modal>
    );
}

export default YesNoModal