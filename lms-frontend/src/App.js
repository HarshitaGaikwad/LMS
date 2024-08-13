import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import appcss from "./app.module.css"; // Assuming this is your custom CSS file for the entire app

import { handleRegister } from "./funcLogics/signup.js";
// import { MainBody } from './mainBody.jsx';

const App = () => {
    
    const [isSignIn, setIsSignIn] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showMainbody, setshowMainbody] = useState(false);

    const toggleForm = () => {
        setIsSignIn(!isSignIn); // Toggle between signup and signin forms
    }

    
    const handleSignIn = async (e, email, password, setEmail, setPassword) => {
        e.preventDefault();
        try {
            if (!email.trim() || !password.trim()) {
                alert("Please fill all the details");
                return;
            }
            const result = await axios.post("http://localhost:8001/signIn", { email, password });
            console.log(JSON.stringify(result.data));
            alert("Sign in successful");

            setEmail("");
            setPassword("");
            // setIsAuthenticated(true);
        } catch (error) {
            console.error("Error at handleSignIn function:", error);
            alert("Sign in failed. Please check your credentials and try again.");
        }
    }

    return (
        <div className={appcss.appBody}>
          
                <div className={appcss.login}>
                    <div className={appcss.loginHeading}>{isSignIn ? 'Sign In' : 'Sign Up'}</div>
                    <div className={appcss.UserValue}>
                        {isSignIn ? (
                            <>
                                <input placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                <input placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                <Button variant="secondary" className={appcss.loginButton} onClick={toggleForm}>Back to Sign Up</Button>
                                <Button variant="secondary" className={appcss.Submit} onClick={(e) => handleSignIn(e, email, password, setEmail, setPassword)}>Sign in</Button>
                              
                            </>
                        ) : (
                            <>
                                <input placeholder="Enter your name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                                <input placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                <input placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                <input placeholder="Confirm your password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                                <Button variant="secondary" className={appcss.loginButton} onClick={toggleForm}>Already a user?</Button>
                                <Button variant="secondary" className={appcss.Submit} onClick={(e) => handleRegister(e, name, email, password, confirmPassword, setName, setEmail, setPassword, setConfirmPassword)}>Sign Up</Button>
                            </>
                        )}
                    </div>
                </div>
            
        </div>
    );
}

export default App;
