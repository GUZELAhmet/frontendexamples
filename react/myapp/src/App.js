import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'


const App = () => {
  return (
       <BrowserRouter>
    <Routes>
      <Route path='/'>
      <Route index element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      </Route>
    </Routes>
    
    </BrowserRouter>
   
  );
 };


export default App