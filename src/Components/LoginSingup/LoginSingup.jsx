import React, { useState } from "react";
import './LoginSignup.css';

import person from '../Assets/person.png';
import email from '../Assets/email.png';
import password from '../Assets/password.png';
import { toast } from 'react-toastify';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Upteste");

    function notify(){
        toast.success('acesso no login');
    }
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Sign Up" && ( 
                    <div className="input">
                        <img src={person} alt="Personal Icon" />
                        <input type="text" placeholder="Username" />
                    </div>
                )}
                <div className="input">
                    <img src={email} alt="Email Icon" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password} alt="Password Icon" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="forgot-password">Lost Password? <span>Click Here</span></div>
                <div className="submit-container">
                    <button className={action === "Login" ? "login-button" : "sign-up-button"} onClick={() => setAction("Sign Up")}>Sign Up</button>
                    <button className={action === "Sign Up" ? "sign-up-button" : "login-button"} onClick={() => {
                        setAction("Login");
                        if (action === "Login") {
                            notify();
                        }
                    }}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
