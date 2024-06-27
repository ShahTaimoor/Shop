import React from 'react'
import Layout  from './Layout'
const Contact = () => {
  return (
    <Layout>
    <div className='bg-white my-16 shadow-lg w-6/12 mx-auto'>
      <h1 className='text-center p-5 text-4xl font-semibold'>Contact Us</h1>
      <img src="/images/contact.svg" alt="" className='w-full'/>
       <form className="mt-8 space-y-4 m-8">
            
            <div className="flex flex-col ">
                <label className="mb-1 text-lg font-semibold ">Name</label>
                <input 
                name="name"
                required
                placeholder="Your Name"
                type="email" className=" outline-none p-3 border border-gray-300 rounded" />
            </div>
            <div className="flex flex-col  ">
                <label className="mb-1 text-lg font-semibold ">Email</label>
                <input 
                required
                name="email"
                placeholder="Your Email"
                type='password' className=" outline-none p-3 border border-gray-300 rounded" />
         
             </div>
             <div className="flex flex-col  ">
                <label className="mb-1 text-lg font-semibold ">Message</label>
                <textarea 
                rows={10}
            
                placeholder="Enter Message"
                type='password' className=" mb-9 outline-none p-3 border border-gray-300 rounded" />
         
             </div>

           
        </form>
    </div>
    </Layout>
  )
}

export default Contact
