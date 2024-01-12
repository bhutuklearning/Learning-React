import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  
  return (
    <UserContextProvider>
    <h1 className='text-3xl font-bold bg-slate-600 text-center p-2 text-white'>Chai aur React and Learning is Important.</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
