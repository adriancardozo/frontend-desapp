import React from "react";
import { Link } from "react-router-dom";
import Modal from "../component/Modal";
import '../styles/Register.css'

const Register = () => {
    return (
        <Modal backdrop={true}>
            <div className="container register-modal-container">
                <form>
                    <h3 className="text-center">Sign Up</h3>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="adress">Adress</label>
                        <input type="text" className="form-control" placeholder= "Enter Adress"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cvu">CVU</label>
                        <input type="text" className="form-control" placeholder= "Enter CVU"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p> {/*className="forgot-password text-right">*/}
                        Already registered <Link to="/sign-in">sign in?</Link>
                    </p>
                </form>
            </div>
        </Modal>
    );
}

export default Register