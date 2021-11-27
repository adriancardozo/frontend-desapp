import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './i18n'
import i18n from './i18n';
import { IntlProvider } from 'react-intl';
import translationEN from "./locales/en/translation.json"
import translationES from "./locales/es/translation.json";
//import * as serviceWorker from "./serviceWorker";

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
  

ReactDOM.render(
  <BrowserRouter>
      <IntlTraslateProvider>
        <App />
      </IntlTraslateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

//serviceWorker.register();