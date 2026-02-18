
import {  useNavigate } from "react-router-dom"
import InputField from "./InputField"

const ForgotPassword=()=>{
    const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        navigate("/")
    }
    return(
        <div className="login-container">
            
            <h2 className="form-title" >Forgot Password</h2>
            <p className="pass">Enter your email address and we’ll send you a link to reset your password</p>
            <form action="#" className="login-form">
                <InputField type="email" placeholder="Enter your Email Address" icon="mail"/>
                <button className="login-button">Submit</button>
                
            </form>
            <a onClick={handleLogin} href="#" className="back-to-login">Back to Login</a>
            
        </div>
    )
}

export default ForgotPassword

/*const navigate=Navigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        navigate("/loginPage")
    }   <a onClick={handleLogin} className="signup-text">Back to Login</a>

        */