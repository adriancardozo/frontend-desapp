import React, { useState } from 'react'
import '../i18n'
import i18n from '../i18n';
import { IntlProvider } from 'react-intl';
import translationEN from "../locales/en/translation.json"
import translationES from "../locales/es/translation.json";

const IntlTraslateProvider =({children})=>{
    const [lang, setLang] = useState(i18n.language);
    const traslates = { 'es':translationES, 'en':translationEN }
    
    i18n.on('languageChanged', (lng) => {
      setLang(lng);
    });
    return(
      <IntlProvider locale={lang} messages={traslates[lang]}>
        {children}
      </IntlProvider>
    )
}

export default IntlTraslateProvider