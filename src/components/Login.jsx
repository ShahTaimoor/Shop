 import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import app from "../util/firebase-config"
import { signInWithEmailAndPassword , getAuth } from "firebase/auth"

const auth = getAuth(app)

const Login = () => {
    const [loader,setLoader] = useState(false)
    const navigate = useNavigate()
  const [form,setForm] = useState({
        email:'',
        password:''
    }) 
   const login = async (e)=>{
try {
    setLoader(true)
    e.preventDefault()
    await signInWithEmailAndPassword(auth, form.email , form.password)   
    navigate('/')
} catch (error) {
    setError("Invalid Credintial provided");
}finally{
    setLoader(false)
}

   }

   const handleOnChange = (e)=>{
    const input = e.target   
   const value = input.value
   const key = input.name
   setForm({
    ...form,
    [key] : value
   })
setError(null)
   }
   const [error,setError] = useState(null)
  return (

    <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden">
        <img src="/images/signup.svg" alt="" className='  w-full h-full' />
        <div className="flex flex-col justify-center p-8 md:p-16">
            <h1 className="text-4xl font-bold mb-3">Sign in</h1>
            <p className="text-lg text-gray-600">Enter Profile Details</p>
       
        <form className="mt-8 space-y-4" onSubmit={login}>
            
            <div className="flex flex-col">
                <label className="mb-1 text-lg font-semibold ">Email</label>
                <input 
                onChange={handleOnChange}
                name="email"
                required
                placeholder="Your Email"
                type="email" className=" outline-none p-3 border border-gray-300 rounded" />
            </div>
            <div className="flex flex-col relative  ">
                <label className="mb-1 text-lg font-semibold ">Password</label>
                <input 
                required
                 onChange={handleOnChange}
                name="password"
                placeholder="************"
                type='password' className=" outline-none p-3 border border-gray-300 rounded" />
         
            </div>
{
    loader ? <h1 className="text-lg font-semibold">Loading...</h1> :
            <button className="bg-blue-600 text-white hover:bg-rose-500 hover:text-white py-3 px-8 rounded font-semibold">Login</button>
}
        </form>
        <div>
            Don't have an account ? <Link to={'/signup'} className="text-blue-600 font-semibold">  Register </Link>
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

export default Login
