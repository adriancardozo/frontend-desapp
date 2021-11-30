import React from 'react'
import { useTranslation } from 'react-i18next';
import '../styles/LoadingAnimation.css'

const LoadingAnimation = () => {
    const { t } = useTranslation()

    return(
        <>
            <div className="row justify-content-center">
                <div className="col-md-auto loading-animation-content-col">
                <div className="spinner-grow text-dark" role="status" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-auto loading-animation-content-col">
                <div className="sr-only text-dark">{t("loading...")}</div>
                </div>
            </div>
        </>
  );
}

export default LoadingAnimation