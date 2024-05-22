import { useState } from 'react'
import './App.css'
import Footer  from './components/Footer';
import Signup from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes >
    <Route path='/Batflix/signup'  element={<Signup/>}/>
    <Route path='/Batflix/signin'  element={<SignIn/>}/>
    <Route path='/Batflix'  element={<Home/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
