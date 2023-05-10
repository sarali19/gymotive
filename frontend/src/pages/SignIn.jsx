import React,{useEffect, useState} from "react";
import "./SignUp.css"
import validationIn from "./validationIn";
import { Link } from "react-router-dom";

const SignIn = ({submitForm}) => {

    const [values, setValues]=useState({
        email:"",
        password:"",

    });
    const handleChange=(event)=>{
        setValues({
            ...values,
            [event.target.name]:event.target.value,
            
        })
    }
    const [errors,setErrors]= useState({});
    const [dataIsCorrect,setDataIsCorrect]=useState(false);

    const handleFormSubmit =(event) =>{
        event.preventDefault();
        setErrors(validationIn(values));
        setDataIsCorrect(true);
        
    };
    useEffect(()=>{
        if(Object.keys(errors).length===0 && dataIsCorrect){
            submitForm(true);
        }
    },[errors]);
    return(
        <div className="container">
            <div className="app-wrapper">
                <div>
                <h2 className="title">
                    Login Account
                </h2>
                </div>
           
            <form className="form-wrapper">
            
                <div className="email">
                    <label className="label">Email</label>
                    <input className="input" 
                    type="email" 
                    name="email" 
                    value={values.email}
                    onChange={handleChange}></input>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" 
                    type="password" 
                    name="password" 
                    value={values.password}
                    onChange={handleChange}></input>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div>
                    <button className="submit" onClick={handleFormSubmit}>Sign in</button>
                </div><br/><br/><br/>
               
            </form>
            <div>
                    <Link to="/signup">You don't have an account yet? <b>Sign Up</b></Link>
                </div>
        </div>
        </div>

    )
            
    
}

export default SignIn;