import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../component/ErrorMessage";
import Modal from "../component/Modal";
import { useLogin } from '../services/login.js'
import { useTranslation } from "react-i18next";
import '../styles/Login.css'
import LanguageSelector from "../component/LanguageSelector";

const Login = () => {    
    const { login } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
    const { t } = useTranslation()

    const signin = (event) => {
        event.preventDefault()
        login({ email, password })
          .catch((error) => setErrorMessage(error.response.status === 404 ? 
            t("invalidLogin") : 
            t("unexpectedError")
          )
        );
      }

    return (
        <>
            <Modal backdrop={true}>
                <div className="modal-header">
                    <div className="row">
                        <div className="col">
                            <h4 className="modal-title">{t("cryptoP2P")}</h4>
                        </div>
                        <div className="col">
                            <LanguageSelector />
                        </div>
                    </div>
                </div>
                <div className="container login-modal-container">
                    <form onSubmit={signin}>
                        <h3 className="text-center">{t("signIn")}</h3>
                        <div className="form-group">
                            <label>{t("emailAddress")}</label>
                            <input required type="email" className="form-control" placeholder={t("enterEmail")} onChange={ e => { setEmail(e.target.value); setErrorMessage("") } }/>
                        </div>
                        <div className="form-group">
                            <label>{t("password")}</label>
                            <input required type="password" className="form-control" placeholder={t("enterPassword")} onChange={ e => { setPassword(e.target.value); setErrorMessage("") } }/>
                        </div>
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">{t("signIn")}</button>
                        </div>
                        <p>{t("newInApp?")} <Link to="/sign-up">{t("createAnAccount.")}</Link></p>
                    </form>
                </div>
            </Modal>
            <div className="row" />
            <div className="row" />
        </>
    );
}

export default Login