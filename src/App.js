import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import From1 from './pages/Signup/Form1/From1'
const App = () => {
  return (
    
    <>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/form1' element={<From1/>}/>
          </Routes>
    </>
  )
}

export default App