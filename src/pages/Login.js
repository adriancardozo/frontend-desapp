import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../component/Modal";
import { useLogin } from '../services/login.js'
import '../styles/Login.css'

const Login = () => {    
    const { login } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
  

    const signin = (event) => {
        event.preventDefault();
        login({ email, password })
          .catch((error) => setErrorMessage(error.response.status === 404 ? 
            "Invalid email or password" : 
            "Unexpected Error"
          )

        );
      }

    return (
        <>
        <Modal backdrop={true}>
            <div className="container login-modal-container">
                <form onSubmit={signin}>
                    <h3 className="text-center">Sign In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={ e => { setEmail(e.target.value); setErrorMessage("") } }/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={ e => { setPassword(e.target.value); setErrorMessage("") } }/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </div>
                    <p>
                        New in CryptoP2P? <Link to="/sign-up">create an account</Link>.
                    </p>
                    <p>{errorMessage}</p>
                </form>
            </div>
        </Modal>
        <div className="row" />
        <div className="row" />
        </>
    );
}

export default Login