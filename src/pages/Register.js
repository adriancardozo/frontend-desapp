import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ErrorMessage from "../component/ErrorMessage";
import LanguageSelector from "../component/LanguageSelector";
import Modal from "../component/Modal";
import { useRegister } from "../services/register";
import '../styles/Register.css'

const Register = () => {
    const { register } = useRegister();
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [cvu, setCvu] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const { t } = useTranslation()
    
    const [errorMessage, setErrorMessage] = useState("");

    const signUp = (event) => {
        event.preventDefault();
        console.log(cvu)
        if(password === repeatedPassword) {
            register({ name, lastname, address, email, password, cvu, walletAddress })
                .catch(error => setErrorMessage(error.response.status === 409 ? 
                    t("theUserAlreadyExists") : 
                    t("unexpectedError")
                ));
        }
        else {
            setErrorMessage(t("thePaswordsMustBeEquals"));
        }
    }

    const onChangeValue = (e, setFunction) => {
        setFunction(e.target.value);
        setErrorMessage("");
    }

    const onChangeNumberValue = (e, setFunction, customValidity) => {
        onChangeValue(e, setFunction)
        e.target.setCustomValidity(e.target.value.match('^\\d+$') ? "" : customValidity);
    }

    return (
        <Modal backdrop={true} className="register-modal">
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
            <div className="container register-modal-container">
                <form onSubmit={signUp}>
                    <h3 className="text-center">{t("signUp")}</h3>
                    <div className="form-group">
                        <label>{t("firstName")}</label>
                        <input required type="text" minLength={3} maxLength={30} className="form-control" placeholder={t("firstName")} onChange={ e => { onChangeValue(e, setName) } }/>
                    </div>
                    <div className="form-group">
                        <label>{t("lastName")}</label>
                        <input required type="text" minLength={3} maxLength={30} className="form-control" placeholder={t("lastName")} onChange={ e => { onChangeValue(e, setLastname) } }/>
                    </div>
                    <div className="form-group">
                        <label>{t("emailAddress")}</label>
                        <input required type="email" className="form-control" placeholder={t("emailAddress")} onChange={ e => { onChangeValue(e, setEmail) } }/>
                    </div>
                    <div className="form-group">
                        <label>{t("password")}</label>
                        <input required type="password" className="form-control" placeholder={t("enterPassword")} onChange={ e => { onChangeValue(e, setPassword) } }/>
                    </div>
                    <div className="form-group">
                        <label>{t("repeatYourPassword")}</label>
                        <input required type="password" className="form-control" placeholder={t("enterPassword")} onChange={ e => { onChangeValue(e, setRepeatedPassword) } }/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="address">{t("address")}</label>
                        <input required type="text" minLength={10} maxLength={30} className="form-control" placeholder={t("enterAddress")} onChange={ e => { onChangeValue(e, setAddress) } }/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cvu">{t("CVU")}</label>
                        <input required type="text" minLength={22} maxLength={22} pattern="^\d+$" className="form-control" placeholder={t("enterCVU")} onChange={ e => onChangeNumberValue(e, setCvu, "Ingrese un número de 22 dígitos.") }/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="wallet-address">{t("walletAddress")}</label>
                        <input required type="text" minLength={8} maxLength={8} pattern="^\d+$" className="form-control" placeholder={t("enterWalletAddress")} onChange={ e => { onChangeNumberValue(e, setWalletAddress, "Ingrese un número de 8 dígitos.") } }/>
                    </div>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <button type="submit" className="btn btn-primary btn-block">{t("signUp")}</button>
                    <p>{t("alreadyRegistered?")} <Link to="/sign-in">{t("signIn.")}</Link></p>
                </form>
            </div>
        </Modal>
    );
}

export default Register