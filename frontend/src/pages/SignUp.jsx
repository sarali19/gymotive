import React,{useEffect, useState} from "react";
import "./SignUp.css"
import validation from "./validation";
import { Link } from "react-router-dom";

const SignUp = ({submitForm}) => {

    const [values, setValues]=useState({
        fullname:"",
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
        setErrors(validation(values));
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
                    Create Account
                </h2>
                </div>
           
            <form className="form-wrapper">
                <div className="name">
                    <label className="label">Full name</label>
                    <input 
                    className="input" 
                    type="text" 
                    name="fullname" 
                    value={values.fullname}
                    onChange={handleChange}></input>
                    {errors.fullname && <p className="error">{errors.fullname}</p>}
                </div>
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
                    <button className="submit" onClick={handleFormSubmit}>Sign up</button>
                </div>
            </form>
            <br/><br/><br/>
            <div>
                <Link to="/signin">Return to <b>Sign In</b></Link>
            </div>
        </div>
        </div>

    )
            
    
}

export default SignUp;