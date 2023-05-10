import React,{useEffect, useState} from "react";
import "./SignUp.css"
import validation from "./validation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = ({submitForm}) => {

    const navigate=useNavigate();
    const [newResource, setNewResource] = useState({
        nom:"",
        prenom:"",
        username:"",
        email:"",
        password:"",
        adresse:"",
        role:"",
        telephone:"",

      });
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post('http://localhost:8000/users', newResource);
          alert('Account created successfully!');
          navigate("/signin")
        //   setNewResource({ nom: '', description: '' });
        } catch (error) {
          console.log(error);
        }
      };

    const [values, setValues]=useState({
        username:"",
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
           
            <form className="form-wrapper"  onSubmit={handleSubmit}>
                <div className="name">
                    <label className="label">Full name</label>
                    <input 
                    className="input" 
                    type="text" 
                    name="usename" 
                    value={newResource?.username} onChange={(e) => setNewResource({...newResource,username : e.currentTarget.value})}
                   required></input>
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div className="email">
                    <label className="label">Email</label>
                    <input className="input" 
                    type="email" 
                    name="email" 
                    value={newResource?.email} 
                    onChange={(e) => setNewResource({...newResource,email : e.currentTarget.value})}
                   required></input>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" 
                    type="password" 
                    name="password" 
                    value={newResource?.password} 
                    onChange={(e) => setNewResource({...newResource,password : e.currentTarget.value})}
                   required></input>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="name">
                    <label className="label">Nom</label>
                    <input className="input" 
                    type="text" 
                    value={newResource?.nom} 
                    onChange={(e) => setNewResource({...newResource,nom : e.currentTarget.value})}
                   ></input>
                </div>
                <div className="name">
                    <label className="label">Prenom</label>
                    <input className="input" 
                    type="text" 
                    value={newResource?.prenom} 
                    onChange={(e) => setNewResource({...newResource,prenom : e.currentTarget.value})}
                   ></input>
                </div>
                <div className="name">
                    <label className="label">Telephone</label>
                    <input className="input" 
                    type="text" 
                    value={newResource?.telephone} 
                    onChange={(e) => setNewResource({...newResource,telephone : e.currentTarget.value})}
                   ></input>
                </div>
                <div className="name">
                    <label className="label">Adresse</label>
                    <input className="input" 
                    type="text" 
                    value={newResource?.adresse} 
                    onChange={(e) => setNewResource({...newResource,adresse : e.currentTarget.value})}
                   ></input>
                </div>
                <div className="name">
                    <label className="label">Role</label>
                    <select className="input" name="role" value={newResource?.role}
                         onChange={(e) => setNewResource({...newResource,role : e.currentTarget.value})} required>
                       
                        <option value='User' name="role" >User</option>
                        <option value='Admin' name="role" >Admin</option>
                    </select>
                </div>

                <div>
                    <button className="submit" >Sign up</button>
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