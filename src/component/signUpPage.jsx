import { useState } from "react"
import InputField from "./InputField"
import SocialLogin from "./SocialLogin"
import { useNavigate } from "react-router-dom"
import { supabase } from "../supabaseClient"

const SignUpPage = () =>{
    const navigate =useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [error,setErorr]=useState(null)

    const handleLogin =async(e)=>{
        e.preventDefault();

        if(password !== confirmPassword){
            setErorr("Passwords do not match")
        }

        const{error} = await supabase.auth.signUp({
            email,password
        })
        if(error){
            setErorr(error.message)
        }else{
            navigate("/")
        }
        
    }
    return(
        <div className="login-container">
            <h2 className="form-title">Signup with</h2>
            <SocialLogin />
            <p className="seprator"><span>or</span></p>
            <form onSubmit={handleLogin} action="#" className="login-form">
                <InputField type="email" placeholder="Email Address" icon="mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <InputField type="password" placeholder="Create New Password" icon="lock" value={password} onChange={e => setPassword(e.target.value)}/>
                <InputField type="password" placeholder="Confirm Password" icon="lock" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                
                {error && <p className="error">{error}</p>}

                <button className="login-button">Create Account</button>
            </form>
            <p onClick={handleLogin} className="signup-text">Already have an account?<a href="#" >Login Now</a></p>
        </div>
    )
}

export default SignUpPage

/*<a href="#" className="forgot-pass-link">Forgot password?</a>*/
