import InputField from "./InputField"
import SocialLogin from "./SocialLogin"
import { useNavigate } from "react-router-dom"

const SignUpPage = () =>{
    const navigate =useNavigate()
    const handleLogin =(e)=>{
        e.preventDefault();
        navigate("/")
    }
    return(
        <div className="login-container">
            <h2 className="form-title">Signup with</h2>
            <SocialLogin />
            <p className="seprator"><span>or</span></p>
            <form action="#" className="login-form">
                <InputField type="email" placeholder="Email Address" icon="mail"/>
                <InputField type="password" placeholder="Create New Password" icon="lock"/>
                <InputField type="password" placeholder="Confirm Password" icon="lock"/>

                <button className="login-button">Create Account</button>
            </form>
            <p onClick={handleLogin} className="signup-text">Already have an account?<a href="#" >Login Now</a></p>
        </div>
    )
}

export default SignUpPage

/*<a href="#" className="forgot-pass-link">Forgot password?</a>*/
