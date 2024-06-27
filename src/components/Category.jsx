import React, { useState } from 'react'
import Layout from './Layout'
const Category = () => {
    const [category,setCategory] = useState([
        {
            title:'Electronics'
        },
        {
            title:'Fashion'
        },
        {
            title:'SmartPhones'
        },
        {
            title:'Furniture'
        }
    ])
  return (
    <Layout>
    <div className='p-16'>
       <div className='md:w-10/12 mx-auto grid md:grid-cols-4 gap-16'>
             {
                category.map((item,index)=>(
                    <div key={index} className='bg-white shadow-lg hover:bg-orange-500 hover:text-white border flex justify-center flex-col p-8 items-center'>
                        <i className="ri-menu-search-line text-6xl"></i>
                     <h1 className='text-2xl font-bold'>{item.title}</h1>
                    </div>
                ))
             }
       </div>
    </div>
    </Layout>
  )
}

export default Category
