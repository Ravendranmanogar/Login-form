import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"
import InputField from "./InputField"
import SocialLogin from "./SocialLogin"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const LoginPage =()=>{
  
    const navigate = useNavigate();

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setErorr]=useState("")

    const handleLogin=async(e)=>{
        e.preventDefault();
        const {error} = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if(error){
          setErorr(error.message)
        }
        else{
          navigate('/dashboard')
        }    
    }

    const handleSignUp=(e)=>{
      e.preventDefault(),
      navigate('/signup')
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
      <form onSubmit={handleLogin} className="login-form">
        <InputField type="email" placeholder="Email Address" icon="mail" value={email} onChange={e => setEmail(e.target.value)}/>
        <InputField type="password" placeholder="Password" icon="lock" value={password} onChange={e => setPassword(e.target.value)}/>

       
        <a onClick={handleForgot}href="#" className="forgot-pass-link">Forgot password?</a>
        {error && <p className="error">{error}</p>}
        <button className="login-button">Log In</button>
      </form>
      <p onClick={handleSignUp} className="signup-text">Don't have an account?<Link href="#" >Signup Now</Link></p>
    </div>
    )
}

export default LoginPage