import React , {useState} from 'react'
import logo from '../assets/imgs/logo.png'
import { Link , useNavigate } from 'react-router-dom'
import {account} from '../Appwrite/appwrite'
import {v4 as uuidv4} from 'uuid'
const SignUp = () => {

  const navigate = useNavigate()
  const [user , setUser] = useState({
    name:"",
    email:"",
    password:"",
  })


  const signupUser = (e)=>{
    e.preventDefault()

    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name,
    )

    promise.then(
      function(response){
        console.log(response)
        navigate("/Batflix/home")
      },
      function(error){
        console.log(error)
      }
    )
  }
  

  return (
    <div>
      {/* overlay */}
      <div className=''>
        <img className='h-screen w-full object-cover md:object-fit' src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt="" />
      </div>
      <div className='absolute top-0 left-0 bg-black/50 w-full h-screen'>
        {/* logo */}
       <NavLink to='/Batflix/home'><img className='w-[10rem]' src={logo} alt="" /></NavLink>
       {/* card */}
       <div className='bg-black/70 text-white w-[95%] md:w-[60%] lg:w-[37%] mx-auto p-10 '>
        <h1 className='text-[2rem] font-bold px-5'>Sign up</h1>
        <div className='flex flex-col gap-4'>
        <input onChange={(e)=>{
          setUser({
            ...user,
            name:e.target.value
          })
        }} className='outline-none mt-3 text-white bg-transparent border-gray-500 rounded-md p-3 w-[90%] mx-auto border-2' placeholder='Name' type="text" />
        <input onChange={(e)=>{
          setUser({
            ...user,
            email:e.target.value
          })
        }} className='outline-none text-white bg-transparent border-gray-500 rounded-md p-3 w-[90%] mx-auto border-2'placeholder='Eamil' type="text" />
        <input onChange={(e)=>{
          setUser({
            ...user,
            password:e.target.value
          })
        }} className='outline-none text-white bg-transparent border-gray-500 rounded-md p-3 w-[90%] mx-auto border-2' placeholder='Password' type="password" />
        <button onClick={signupUser} className='bg-red-700 text-white w-[90%] mx-auto py-2 rounded-sm'>Sign Up</button>
        </div>
        <p className='px-10 py-3'>Already have an account?<Link to='/Batflix/' className='cursor-pointer'> Sign in</Link></p>
       </div>
      </div>
    </div>
  )
}

export default SignUp
