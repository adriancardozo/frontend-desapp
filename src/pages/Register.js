import React, { useState } from "react";
import { Link } from "react-router-dom";
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


    return (
        <Modal backdrop={true}>
            <div className="container register-modal-container">
                <form onSubmit={signUp}>
                    <h3 className="text-center">Sign Up</h3>
                    <div className="form-group">
                        <label>First name</label>
                        <input required type="text" className="form-control" placeholder="First name" onChange={ e => { setName(e.target.value); setErrorMessage("") } }/>
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input required type="text" className="form-control" placeholder="Last name" onChange={ e => { setLastname(e.target.value); setErrorMessage("") } }/>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input required type="email" className="form-control" placeholder="Enter email" onChange={ e => { setEmail(e.target.value); setErrorMessage("") } }/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input required type="password" className="form-control" placeholder="Enter password" onChange={ e => { setPassword(e.target.value); setErrorMessage("") } }/>
                    </div>
                    <div className="form-group">
                        <label>Repeat your password</label>
                        <input required type="password" className="form-control" placeholder="Enter password" onChange={ e => { setRepeatedPassword(e.target.value); setErrorMessage("") } }/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="address">Address</label>
                        <input required type="text" className="form-control" placeholder= "Enter Address" onChange={ e => { setAddress(e.target.value); setErrorMessage("") } }/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cvu">CVU</label>
                        <input required type="text" className="form-control" placeholder= "Enter CVU" onChange={ e => { setCvu(e.target.value); setErrorMessage("") } }/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="wallet-address">Wallet Address</label>
                        <input required type="text" className="form-control" placeholder= "Enter Wallet Address" onChange={ e => { setWalletAddress(e.target.value); setErrorMessage("") } }/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p> {/*className="forgot-password text-right">*/}
                        Already registered <Link to="/sign-in">sign in?</Link>
                    </p>
                    <p>{errorMessage}</p>
                </form>
            </div>
        </Modal>
    );
}

export default Register