import { useState } from "react"
import { Link , useNavigate } from "react-router-dom"
import app from "../util/firebase-config"
import { getAuth , createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
const Signup = () => {
    
    const [loader,setLoader] = useState(false)
    
    const [error,setError] = useState(null)
    const navigate =useNavigate()
    const auth = getAuth(app)

    const [form,setForm] = useState(
        {
            fullname:'',
            email:'',
            password:''
        }
    )

    const handleOnchange = (e)=>{
       const input = e.target
       const value = input.value
       const key = input.name
      setForm({
        ...form,
        [key]: value
      })
      setError(null)
    }
   const signup  = async (e)=>{
    try {
        e.preventDefault()
        setLoader(true)
        await createUserWithEmailAndPassword(auth,form.email , form.password)
        await updateProfile(auth.currentUser,{displayName:form.fullname})
        navigate('/')
    } catch (error) {
        setError(error.message)
    }finally{
        setLoader(false)
    }
    
    
    }
  return (

    <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden">
        <img src="/images/signup.svg" alt="" className='  w-full h-full' />
        <div className="flex flex-col justify-center p-8 md:p-16">
            <h1 className="text-4xl font-bold">New User</h1>
            <p className="text-lg text-gray-600">Create Your Account</p>
       
        <form onSubmit={signup} className="mt-8 space-y-4">
            <div className="flex flex-col">
                <label className="mb-1 text-lg font-semibold">FullName</label>
                <input 
                onChange={handleOnchange}
                name="fullname"
                required
                placeholder="Your Name"
                type="text" className=" outline-none p-3 border border-gray-300 rounded" />
            </div>
            <div className="flex flex-col">
                <label className="mb-1 text-lg font-semibold ">Email</label>
                <input 
                onChange={handleOnchange}
                name="email"
                required
                placeholder="Your Email"
                type="email" className=" outline-none p-3 border border-gray-300 rounded" />
            </div>
            <div className="flex flex-col relative  ">
                <label className="mb-1 text-lg font-semibold ">Password</label>
                <input 
                onChange={handleOnchange}
                required
                name="password"
                placeholder="************"
                type='password' className=" outline-none p-3 border border-gray-300 rounded" />
         
            </div>
            {
                loader ?
                <h1 className="text-lg font-semibold texxt-gray-600">Loading...</h1>
                   :
            <button className="bg-blue-600 text-white hover:bg-rose-500 hover:text-white py-3 px-8 rounded font-semibold">Signup</button>
            }
        </form>
        <div>
            Already have an account ? <Link to={'/login'} className="text-blue-600 font-semibold">  Signin </Link>
        </div>

        
       {error &&
       <div className=" flex justify-between items-center mt-2 bg-rose-300 p-2 rounded text-white font-semibold">
       <p>{error}</p>
       <button onClick={()=>setError(null)}>
        close
       </button>
       </div>
       
       }
        
        
        </div>
    </div>

  )
}

export default Signup
