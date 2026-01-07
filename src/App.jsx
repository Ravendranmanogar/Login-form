import { Route, Routes } from "react-router-dom"
import InputField from "./component/InputField"
import LoginPage from "./component/loginPage"
import SignUpPage from "./component/signUpPage"
import SocialLogin from "./component/SocialLogin"

const App =()=>{
  return(
    <Routes>
      <Route path="/" element={<LoginPage/>}/>

      <Route path="/signup" element={<SignUpPage/>}/>
    </Routes>
  )
}
export default App