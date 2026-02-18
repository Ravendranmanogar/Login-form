import React from 'react'
import InputField from './InputField'
const ResetPassword = () => {
  return (
    <div className="login-container">
            <h2 className="form-title">Reset Password</h2>
            
            
            <form action="#" className="login-form">
                
                <InputField type="password" placeholder="Create New Password" icon="lock"/>
                <InputField type="password" placeholder="Confirm Password" icon="lock"/>

                <button className="login-button">Update Password</button>
            </form>
            
        </div>
  )
}

export default ResetPassword