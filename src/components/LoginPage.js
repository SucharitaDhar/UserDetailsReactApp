import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage({Login, error}) {
    const[details,setDetails] = useState({firstName:"", lastName:"", password:""})

    const submitHandler =e => {
        e.preventDefault();
        Login(details);
    }

    return ( 
        <form onSubmit = {submitHandler}>
            <div className="login">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" className = "form-control" name="firstName" id="firstName" onChange = {e=> setDetails({...details,firstName: e.target.value})} value = {details.firstName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" className= "form-control"name="lastName" id="lastName" onChange = {e=> setDetails({...details,lastName: e.target.value})} value = {details.lastName} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className= "form-control" name="password" id="password" onChange = {e=> setDetails({...details,password: e.target.value})} value = {details.password}/>
                </div>
                <div>
                <input type="submit" className = "btn btn-warning" value="LOGIN" />
                </div>
               

            </div>
        </form>);
}
 
export default LoginPage;