import React, { useState } from 'react'
import { useTranslation } from "react-i18next";

const LanguageSelector = ({ className }) => {
    const [language, setLanguage] = useState(localStorage.getItem("language"))
    const { i18n } = useTranslation()

    const selectLanguage = (e) => {
        setLanguage(e.target.value)
        i18n.changeLanguage(e.target.value)
        localStorage.setItem("language", e.target.value)
    }

    return(
        <div className={`col-md-auto ${className ? className : ''}`}>
            {/* <div className={`row ${className ? className : ''}`}> */}
                <select value={ language } className="form-select" onChange={ selectLanguage }>
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                </select>
            {/* </div> */}
        </div>
        // <>
        //     <button className="btn btn-primary">EN</button>
        //     <button className="btn btn-secondary">ES</button>
        // </>
    );
}

export default LanguageSelector