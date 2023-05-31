import React, { useState } from "react";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    return (
        <div>
            {!formIsSubmitted ? (
                <SignUp submitForm={submitForm} />
            ) : (
                <div className="container">
                    <div className="app-wrapper">
                        <h1 className="form-success">Account Created!</h1>
                        <Link to="/signin">Return to Sign In page</Link>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Form;