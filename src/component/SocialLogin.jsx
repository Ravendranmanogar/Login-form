import { supabase } from "../supabaseClient"

const SocialLogin=()=>{
  const loginWithGoogle =async()=>{
    await supabase.auth.signInWithOAuth({
      provider:"google",
      options:{
        redirectTo: "http://localhost:5173/dashboard"
      }
    })
  }
    return(
        <div className="social-login">
        <button onClick={loginWithGoogle} className="social-button">
          <img src="/logos/google.svg" alt="Google" className="social-icon"/>
          Google
        </button>
        <button className="social-button">
          <img src="/logos/apple.svg" alt="Apple" className="social-icon"/>
          Apple
        </button>
      </div>
    )
}
export default SocialLogin