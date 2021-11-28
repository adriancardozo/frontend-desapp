import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import IntlTraslateProvider from './component/IntlTraslateProvider';

ReactDOM.render(
  <BrowserRouter>
      <IntlTraslateProvider>
        <App />
      </IntlTraslateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
