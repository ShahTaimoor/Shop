import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
const Layout = ({children}) => {

    const [size,setSize] = useState(280)
     const [mobileSize,setMobileSize] = useState(0)
    const [accountMenu,setAccountMenu] = useState(false)
    const Location = useLocation()

    const menus =  [
         {
            label:'Dashboard',
            icon:  <i className="ri-dashboard-line mr-2"></i>,
            link:'/admin/dashboard'
        },
        {
            label:'Products',
            icon:  <i className="ri-shopping-cart-2-line mr-2"></i>,
            link:'/admin/products'
        },
        {
            label:'Orders',
            icon:    <i className="ri-shape-line mr-2"></i>,
            link: '/admin/orders'
        },
        {  label:'Customers',
            icon:    <i className="ri-tools-line mr-2"></i>,
            link: '/admin/customers'
        },
        {
            label:'Payments',
            icon:    <i className="ri-refund-2-line mr-2"></i>,
            link: '/admin/payments'
        },
        {  label:'Settings',
            icon:    <i className="ri-tools-line mr-2"></i>,
            link: '/admin/settings'
        },
    ]
   
    return (
    <>
    {/* Desktop */}

    <div className='md:block hidden'>
       <aside 
       style={{width: size,transition:'0.3s'}}

       className='overflow-hidden w-[280px] bg-indigo-500 fixed top-0 left-0 h-full'>
           <div className='flex flex-col'>
            {
                menus.map((item, index)=>(
           <Link style={{
            background: (Location.pathname === item.link) ? '#e11d48' : 'transparent'
           }} key={index} className='px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white' to={item.link}>
           {item.icon}
           {item.label}
           </Link>
                ))
            }

        <button className='text-left px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white'>
            Logout
        </button>
           
           </div>
       </aside>

       <section className='bg-gray-100 h-screen' style={{marginLeft:size,transition:'0.3s'}}>
        <nav className='sticky top-0 left-0 bg-white shadow p-6 flex items-center justify-between'> 
            <div className='flex items-center gap-2 text-xl'>
               <button onClick={()=>setSize(size === 280 ? 0 : 280)} className='hover:bg-indigo-500 px-2 py-1'>
                <i className="ri-menu-2-line text-xl"></i>
               </button>           

               <h1>ZARYAB AUTO</h1>
            </div>

            <div>
                <button className='relative'>
                    <img 
                    onClick={()=>setAccountMenu(!accountMenu)}
                     src="/images/avatar.jpg" alt="" 
                    className='w-10 h-10 rounded-full'/>
                    {
                        accountMenu &&   <div className='absolute top-18 right-0 bg-white shadow-lg p-6 w-[180px] '>
                     
                       
                        <div >
                            <h1 className='text-lg font-semibold'>Taimoor</h1>
                            <p className='text-gray-500'>example@gmail.com</p>
                            <div className='h-px bg-gray-200 my-4'>
                                
                            </div>
                            <button>
                                    <i class="ri-logout-circle-r-line mr-2"></i>
                                    Logout</button>
                        </div>
                    </div> 
                    }
                    
                  
                </button>
            </div>
            
        </nav>
        <div className='p-6'>
        {
            children
        }
        </div>
       </section>
    </div>

    
    
    {/* Mobile */}

     <div className='md:hidden block'>                 
       <aside 
       style={{width: mobileSize,transition:'0.3s'}}

       className='overflow-hidden w-[280px] z-50 bg-indigo-500 fixed top-0 left-0 h-full'>
         
         <button onClick={()=>setMobileSize(mobileSize === 0 ? 280 : 0)} className='hover:bg-indigo-500 px-2 py-1'>
                <i class="ri-close-line absolute top-2 right-4 text-xl"></i>
               </button> 
           <div className='flex flex-col'>
            {
                menus.map((item, index)=>(
           <Link style={{
            background: (Location.pathname === item.link) ? '#e11d48' : 'transparent'
           }} key={index} className='px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white' to={item.link}>
           {item.icon}
           {item.label}
           </Link>
                ))
            }
            <button className='text-left px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white'>
            Logout
        </button>
       </div>
       </aside>

       <section className='bg-gray-100 h-screen '>
        <nav className='sticky top-0 left-0 bg-white  shadow p-6 flex items-center justify-between'> 
            <div className='flex items-center gap-2 text-xl'>
               <button onClick={()=>setMobileSize(mobileSize === 0 ? 280 : 0)} className='hover:bg-indigo-500 px-2 py-1'>
                <i className="ri-menu-2-line text-xl"></i>
               </button>           

               <h1>ZARYAB AUTO</h1>
            </div>

            <div>
                <button className='relative'>
                    <img 
                    onClick={()=>setAccountMenu(!accountMenu)}
                     src="/images/avatar.jpg" alt="" 
                    className='w-10 h-10 rounded-full'/>
                    {
                        accountMenu &&   <div className='absolute top-18 right-0 bg-white shadow-lg p-6 w-[180px] '>
                     
                       
                        <div >
                            <h1 className='text-lg font-semibold'>Taimoor</h1>
                            <p className='text-gray-500'>example@gmail.com</p>
                            <div className='h-px bg-gray-200 my-4'>
                                
                            </div>
                            <button>
                                    <i class="ri-logout-circle-r-line mr-2"></i>
                                    Logout</button>
                        </div>
                    </div> 
                    }
                    
                  
                </button>
            </div>
            
        </nav>
        <div className='p-6'>
        {
            children
        }
        </div>
       </section>
    </div>


  
  </>
  )
}

export default Layout
