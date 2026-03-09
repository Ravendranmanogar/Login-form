import React from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import { useAuth } from './authContext'

const Dashboard = () => {
  const {session} =useAuth()
  const navigate = useNavigate()
 
  const handleLogOut = async() =>{
    await supabase.auth.signOut()
    navigate("/")
  }
  return (
    <div>
      <h1>DashBoard</h1>
      <p>You are logged in</p>
      <h1>Welcome</h1>
      <p>{session?.user?.email}</p>

      <button onClick={handleLogOut}>
        logout
      </button>
    </div>
  )
}

export default Dashboard