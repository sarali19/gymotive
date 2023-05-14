import React, { useEffect, useState } from "react";
import "./SignUp.css"
import validation from "./validation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../api/axios";

const SignUp = ({ submitForm }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        role: "",
        phoneNumber: "",
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { name, email, password } = formData
            await api.post('users/signup', { name, email, password });
            alert('Account created successfully!');
            navigate("/signin")
        } catch (error) {
            console.log(error);
        }
    };

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",

    });
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,

        })
    }
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">
                        Create Account
                    </h2>
                </div>

                <form className="form-wrapper" onSubmit={handleSubmit}>
                    <div className="name">
                        <label className="label">Full name</label>
                        <input
                            className="input"
                            type="text"
                            name="usename"
                            value={formData?.name} onChange={(e) => setFormData({ ...formData, name: e.currentTarget.value })}
                            required></input>
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input"
                            type="email"
                            name="email"
                            value={formData?.email}
                            onChange={(e) => setFormData({ ...formData, email: e.currentTarget.value })}
                            required></input>
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input className="input"
                            type="password"
                            name="password"
                            value={formData?.password}
                            onChange={(e) => setFormData({ ...formData, password: e.currentTarget.value })}
                            required></input>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="name">
                        <label className="label">Phone number</label>
                        <input className="input"
                            type="text"
                            value={formData?.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.currentTarget.value })}
                        ></input>
                    </div>
                    <div className="name">
                        <label className="label">Address</label>
                        <input className="input"
                            type="text"
                            value={formData?.address}
                            onChange={(e) => setFormData({ ...formData, address: e.currentTarget.value })}
                        ></input>
                    </div>
                    <div className="name">
                        <label className="label">Role</label>
                        <select className="input" name="role" value={formData?.role}
                            onChange={(e) => setFormData({ ...formData, role: e.currentTarget.value })} required>

                            <option value='User' name="role" >User</option>
                            <option value='Admin' name="role" >Admin</option>
                        </select>
                    </div>

                    <div>
                        <button className="submit" >Sign up</button>
                    </div>
                </form>
                <br /><br /><br />
                <div>
                    <Link to="/signin">Return to <b>Sign In</b></Link>
                </div>
            </div>
        </div>

    )


}

export default SignUp;