import React , {useState , useEffect} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import {account} from '../Appwrite/appwrite'
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
  const navigate= useNavigate()
  const [userDetails , setUserDetails] = useState()
  const [hover , setHover] = useState(false)

  useEffect(()=>{
  const getDetails = account.get()
  getDetails.then(
    function(response){
      setUserDetails(response)
    },
    function(error){
      console.log(error)
    }
  )
  },[])
  const LogOut=()=>{
    let account = document.querySelector('.account')
    let logout =document.querySelector('.logout');
    if(logout.classList.contains('account-active')){
        logout.classList.remove('account-active');
    }
    else{
        logout.classList.add('account-active');
    }
}

  const handleLogout =async()=>{
    try{
     await account.deleteSession("current")
     navigate("/")
    }
    catch(error){
     console.log(error)
    }
   }

  return (
    <div>
      {userDetails ? (
      <>
      <div className='flex   justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 md:text-4xl font-bold cursor-pointer text-2xl mt-2'>
          BATFLIX
        </h1>
        <div className='flex'>
        <div >
        <button className='text-white pr-0 ml-10 flex flex-col items-center'>
          <MdOutlineAccountCircle onClick={()=>setHover(!hover)} size={35}/>
          <div className={hover?'bg-black/70 text-left mt-2 p-5 flex flex-col gap-3':'bg-black/70 text-left mt-2 p-5 opacity-0 flex flex-col gap-3'}>
          <p>{userDetails.name}</p>
          <p>{userDetails.email}</p>
          <div onMouseOver={LogOut} ><button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Log Out</button></div>
         </div>
        </button>
        </div>
        </div>
    </div>
      </>) : (
      <>
      <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 md:text-4xl font-bold cursor-pointer text-2xl'>
          BATFLIX
        </h1>
        <div>
         <Link to='/signin'><button className='text-white pr-4'>Sign In</button></Link>
         <Link to='/signup'><button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button></Link>
        </div>
    </div>
      </>)}
    </div>
  )
}

export default Navbar
