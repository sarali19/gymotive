import React, { useState } from "react";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";

const FormSignIn =() =>{
    const [formIsSubmitted,setFormIsSubmitted]=useState(false);
    const navigate = useNavigate();
    const submitForm=() =>{
        setFormIsSubmitted(true);
    };
    return(
        <div>
            {!formIsSubmitted ?(
                <SignIn submitForm={submitForm}/>
            ):(
                navigate('/')
            )}
        </div>
    );
};
export default FormSignIn;