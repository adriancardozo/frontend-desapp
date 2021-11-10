import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../component/ErrorMessage";
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
    
    const [errorMessage, setErrorMessage] = useState("");

    const signUp = (event) => {
        event.preventDefault();
        console.log(cvu)
        if(password === repeatedPassword) {
            register({ name, lastname, address, email, password, cvu, walletAddress })
                .catch(error => setErrorMessage(error.response.status === 409 ? 
                    "The user already exists." : 
                    "Unexpected error."
                ));
        }
        else {
            setErrorMessage("The password must be equals.");
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
            <div className="container register-modal-container">
                <form onSubmit={signUp}>
                    <h3 className="text-center">Sign Up</h3>
                    <div className="form-group">
                        <label>First name</label>
                        <input required type="text" minLength={3} maxLength={30} className="form-control" placeholder="First name" onChange={ e => { onChangeValue(e, setName) } }/>
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input required type="text" minLength={3} maxLength={30} className="form-control" placeholder="Last name" onChange={ e => { onChangeValue(e, setLastname) } }/>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input required type="email" className="form-control" placeholder="Enter email" onChange={ e => { onChangeValue(e, setEmail) } }/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input required type="password" className="form-control" placeholder="Enter password" onChange={ e => { onChangeValue(e, setPassword) } }/>
                    </div>
                    <div className="form-group">
                        <label>Repeat your password</label>
                        <input required type="password" className="form-control" placeholder="Enter password" onChange={ e => { onChangeValue(e, setRepeatedPassword) } }/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="address">Address</label>
                        <input required type="text" minLength={10} maxLength={30} className="form-control" placeholder= "Enter Address" onChange={ e => { onChangeValue(e, setAddress) } }/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cvu">CVU</label>
                        <input required type="text" minLength={22} maxLength={22} pattern="^\d+$" className="form-control" placeholder= "Enter CVU" onChange={ e => onChangeNumberValue(e, setCvu, "Ingrese un número de 22 dígitos.") }/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="wallet-address">Wallet Address</label>
                        <input required type="text" minLength={8} maxLength={8} pattern="^\d+$" className="form-control" placeholder= "Enter Wallet Address" onChange={ e => { onChangeNumberValue(e, setWalletAddress, "Ingrese un número de 8 dígitos.") } }/>
                    </div>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p>Already registered <Link to="/sign-in">sign in?</Link></p>
                </form>
            </div>
        </Modal>
    );
}

export default Register