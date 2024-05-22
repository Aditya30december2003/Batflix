import React , {useState} from 'react'
import logo from '../assets/imgs/logo.png'
import { Link , NavLink, useNavigate } from 'react-router-dom'
import {account} from '../Appwrite/appwrite'
const SignIn = () => {
  
  const navigate = useNavigate()
  const [user , setUser] = useState({
    email:"",
    password:""
  })


 const userLogin = async(e)=>{
  e.preventDefault()
  try{
    await account.createEmailSession(user.email , user.password)
    navigate("/")
  }
  catch(error){
    console.log(error)
  }
 }
  

  return (
    <div>
      {/* overlay */}
      <div className=''>
        <img className='h-screen w-full object-cover' src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt="" />
      </div>
      <div className='absolute top-0 left-0 bg-black/50 w-full h-screen'>
        {/* logo */}
       <NavLink to='/Batflix/home'><img className='w-[10rem]' src={logo} alt="" /></NavLink>
       {/* card */}
       <div className='bg-black/70 text-white w-[95%] md:w-[60%] lg:w-[37%] mx-auto p-10 '>
        <h1 className='text-[2rem] font-bold px-5'>Sign in</h1>
        <div className='flex flex-col gap-4 mt-4'>
        <input onChange={(e)=>{
          setUser({
            ...user,
            email:e.target.value
          })
        }}  className='outline-none text-white bg-transparent border-gray-500 rounded-md p-3 w-[90%] mx-auto border-2'placeholder='Eamil' type="text" />
        <input onChange={(e)=>{
          setUser({
            ...user,
            password:e.target.value
          })
        }} className='outline-none text-white bg-transparent border-gray-500 rounded-md p-3 w-[90%] mx-auto border-2' placeholder='Password' type="password" />
        <button onClick={userLogin} className='bg-red-700 text-white w-[90%] mx-auto py-2 rounded-sm'>Sign In</button>
        </div>
        <p className='px-10 py-3'>Don't have an account?<Link to='/signup' className='cursor-pointer'> Sign up</Link></p>
       </div>
      </div>
    </div>
  )
}

export default SignIn



