import { useState, useEffect } from "react"
import { Link,useNavigate } from "react-router-dom"
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth"
import app from "../util/firebase-config"
const auth = getAuth(app)

const Layout = ({children}) => {
  const [menu,setMenu] = useState(false)
  const [session,setSession] = useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if (user) {
        setSession(user)
      }else{
  setSession(false)
      }
    })
  },[])
  const menus = [
    {
        label:'Home',
        href: '/'
    },
    {
        label:'Products',
        href: '/products'
    },
    {
        label:'Category',
        href: '/category'
    },
    {
        label:'Contact us',
        href: '/contact-us'
    },
  ]
  const navigate = useNavigate()

  const mobileLink = (e)=>{
    navigate(e)
  }
  const [open,setOpen] = useState(false)
    

  if (session === null) {
    return (
    <div className="bg-gray-100 h-full fixed top-0 left-0 w-full flex justify-center items-center">
<span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>

    </div>
  )
  }
  
  
  
  return (
    <div>

      
      
        <aside className="md:hidden z-50 bg-slate-700 fixed  bottom-0 top-0 left-0 " style={{
          width: open ? 250 : 0,
          transition: '0.3s'
        }}>
    <div className="flex flex-col  gap-8 ">
      {
          session &&  <button className="relative mt-10 ml-10" onClick={()=>setMenu(!menu)}>
         <div className="flex items-center gap-3 overflow-hidden"> 
          <img src="/images/signup.svg" alt="" className="w-10 h-10 rounded-full"/>
          <p className="capitalize text-white">{session.displayName}</p>
         </div>
          {
            menu &&
          <div className=" flex flex-col gap-2 items-start w-[150px] py-3  bg-white z-50 absolute top-12 left-0">
            
            <Link className="hover:bg-gray-300 w-full p-2 text-left" to={'/profile'}>My Profile</Link>
           <Link className="hover:bg-gray-300 w-full p-2 text-left" to={'/cart'}>Cart</Link>
            
             <button className="hover:bg-gray-300 w-full p-2 text-left" onClick={()=>signOut(auth)}>Logout</button>
          </div>
          }          

        
        </button>
      }
       {
                menus.map((item,index)=>(
                    
                        <button
                        onClick={()=>mobileLink(item.href)}
                        key={index} 
                        className="text-white hover:bg-black p-4  overflow-hidden"
                        to={item.href}>{item.label}</button>
                    
                ))
            }
    </div>
      </aside>
      
      <nav className='shadow-lg sticky top-0 left-0 bg-white'>
         <div className='w-10/12 mx-auto flex items-center justify-between'>
           <img src="/images/logo.avif" alt="" className='w-16'/>
          <button  className="text-2xl md:hidden flex" onClick={()=> setOpen(!open)}>
            {
            open === false ?
            <i className="ri-menu-2-line"></i>

            :
            <i className="ri-close-circle-line"></i>
            }
            </button>
           
           
           <ul className="md:flex items-center gap-8 hidden">
            {
                menus.map((item,index)=>(
                    <li key={index}>
                        <Link 
                        className="py-6 block text-center hover:bg-blue-500 w-[100px]"
                        to={item.href}>{item.label}</Link>
                    </li>
                ))
            }

       {
        !session && <>
        
        <Link to={'/login'} className="py-6 block text-center hover:bg-blue-500 w-[100px]">Login</Link>
        <Link to={'/signup'} className="py-6 block text-center hover:bg-blue-500 w-[100px]">SignUp</Link>
        
        </>
       }
       {
        session &&  <button className="relative" onClick={()=>setMenu(!menu)}>
          <img src={session.photoURL} alt="" className="w-10 h-10 rounded-full"/>
          
          {
            menu &&
          <div className=" flex flex-col gap-2 items-start w-[150px] py-3  bg-white z-50 absolute top-12 right-0">
            
            <Link className="hover:bg-gray-300 w-full p-2 text-left" to={'/profile'}>My Profile</Link>
           <Link className="hover:bg-gray-300 w-full p-2 text-left" to={'/cart'}>Cart</Link>
            
             <button className="hover:bg-gray-300 w-full p-2 text-left" onClick={()=>signOut(auth)}>Logout</button>
          </div>
          }          

        
        </button>
       }

           </ul>
         </div>
      </nav>
{
    children
}
      <footer className="bg-orange-600  py-16">
        <div className='w-10/12 mx-auto grid md:grid-cols-4 gap-8 md:gap-0'>
        <div>
        <h1 className="text-3xl text-white mb-3">Brands Details</h1>
          <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, recusandae.</p>
          <img src="/images/logo.avif" alt="" className='w-16'/>
        </div>
      <div>
        <h1 className="text-3xl text-white mb-3">Website</h1>
            <ul className="text-white">
            {
                menus.map((item,index)=>(
                    <li key={index}>
                        <Link 
                        className=" block py-1 w-[100px]"
                        to={item.href}>{item.label}</Link>
                    </li>
                ))
            }
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/login'}>SignUp</Link></li>
           
           </ul>
          
        </div>

        <div>
        <h1 className="text-3xl text-white mb-3">Follow Us</h1>
            <ul className="text-white">
            {
                menus.map((item,index)=>(
                    <li key={index}>
                        <Link 
                        className=" block py-1 w-[100px]"
                        to={item.href}>{item.label}</Link>
                    </li>
                ))
            }
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/login'}>SignUp</Link></li>
           
           </ul>
          
        </div>
        <div>
        <h1 className="text-3xl text-white mb-3">Contact us</h1>
          <form  className="space-y-6">
            <input 
            name="fullname"
            type="text" 
            placeholder="your name"
            className="w-full p-3"
            />
            <input 
            name="email"
            type="email" 
            placeholder="your email"
            className="w-full p-3"
            />
            <textarea
            name="message"
            placeholder="message"
            rows={3}
            className="w-full p-3"
            />

            <button className="bg-black text-white py-3 px-6 rounded">Submit</button>
          </form>
        </div>
        </div>
      </footer>

    </div>
  )
}

export default Layout
