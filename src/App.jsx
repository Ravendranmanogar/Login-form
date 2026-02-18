import { Route, Routes } from "react-router-dom"
import LoginPage from "./component/loginPage"
import SignUpPage from "./component/signUpPage"
import ForgotPassword from "./component/forgotPassword"
import ResetPassword from "./component/resetPassword"

const App =()=>{
  return(
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/reset-password" element={<ResetPassword/>}/>
    </Routes>
  )
}
export default App