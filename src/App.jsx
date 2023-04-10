import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App space-y-10">
      <Navbar></Navbar>
      <Outlet/>
      <ToastContainer/>
      
    </div>
  )
}

export default App
