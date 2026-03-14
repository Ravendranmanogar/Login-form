import { Route, Routes } from "react-router-dom"
import LoginPage from "./component/loginPage"
import SignUpPage from "./component/signUpPage"
import ForgotPassword from "./component/forgotPassword"
import ResetPassword from "./component/resetPassword"
import Dashboard from "./component/dashboard"
import ProtectedRoute from "./component/protectedRoute"
import Confirmation from "./component/confirmation"

const App =()=>{
  return(
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/reset-password" element={<ResetPassword/>}/>
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path="/confirmation" element={<Confirmation />}/>
    </Routes>
  )
}
export default App