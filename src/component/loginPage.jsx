import { useEffect } from "react"
import { supabase } from "../supabaseClient"
import InputField from "./InputField"
import SocialLogin from "./SocialLogin"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const LoginPage =()=>{
  
    const navigate = useNavigate();
    const handleSignUp=(e)=>{
        e.preventDefault();
        console.log("login button clicked");
        navigate("/signup")
    }
    const handleForgot=(e)=>{
      e.preventDefault();
      navigate("/forgotPassword")
    }
    return(   
    <div className="login-container">
      <h2 className="form-title">Login with</h2>
      <SocialLogin />
      <p className="seprator"><span>or</span></p>
      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email Address" icon="mail"/>
        <InputField type="password" placeholder="Password" icon="lock"/>

       
        <a onClick={handleForgot}href="#" className="forgot-pass-link">Forgot password?</a>
        <button className="login-button">Log In</button>
      </form>
      <p onClick={handleSignUp} className="signup-text">Don't have an account?<Link href="#" >Signup Now</Link></p>
    </div>
    )
}

export default LoginPage