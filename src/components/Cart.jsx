import { useState,useEffect } from "react"
import Layout from "./Layout"
import app from "../util/firebase-config";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import { getFirestore , getDocs,collection,query,where } from "firebase/firestore";
const auth = getAuth(app)
const db = getFirestore(app)

const Cart = () => {
  const [session,setSession] = useState(null)
  const [products,setProducts] = useState([
    {
        title: 'Nokia',
        price:200,
        image:'/images/products/p1.jpeg',
        disc:15
    },
     {
        title: 'Nokia',
        price:200,
        image:'/images/products/p2.jpeg',
        disc:15
    },
     {
        title: 'Nokia',
        price:200,
        image:'/images/products/p3.jpeg',
        disc:15
    },
     {
        title: 'Nokia',
        price:200,
        image:'/images/products/p4.jpeg',
        disc:15
    }

  ])
  
  useEffect(()=>{
 onAuthStateChanged(auth,(user)=>{
  if (user) {
    setSession(user)
  }else{
    setSession(false)
  }
 })
},[])

useEffect(()=>{
  const req = async ()=>{
if (session) {
    const col = collection(db,'carts')
    const q = query(col,where('userId','==',session.uid))
    const snapshot = await getDocs(q)
    const temp = []
    snapshot.forEach((doc)=>{
      const document = doc.data()
      temp.push(document)
    })
    setProducts(temp)

  }
  }
  req()
},[session])
    return (
    <Layout>
    <div className="my-16 mx-auto w-10/12 bg-white shadow-lg rounded-md border p-8">
      <div className="flex items-center gap-4">
      <i className="ri-shopping-cart-line text-3xl font-semibold"></i>
      <h1 className="text-4xl font-bold ">Cart</h1>
      </div>
      <hr className="my-6"/>
          
          <div className="space-y-12">
            {
                products.map((item,index)=>(
                    <div key={index} className=" flex flex-col md:flex-row justify-between  md:p-6 gap-3 border">
               <img src={item.image} alt=""  className="md:w-[100px] w-full"/>
               <div>
                <h1 className="font-bold capitalize text-lg">{item.title}</h1>
                <div className="flex flex-col gap-4">
                   <div className="space-x-3">
                    <label>{item.price-(item.price*item.disc)/100}</label>
                    <del>{item.price}</del>
                    <label className="text-gray-400">{item.disc}%</label>
                   </div>
                    <button className="bg-rose-600 md:w-fit w-full px-4 py-2 rounded">
                        <i className="ri-eraser-line"></i>
                        Remove
                    </button>
                </div>
               </div>
                    </div>
                ))
            }
          </div>

          <hr className="my-6"/>
          <h1 className="font-semibold text-2xl">Total:57000</h1>
         <button className="bg-green-600 md:w-fit w-full px-4 py-2 mt-4 rounded">
                       <i className="ri-shopping-bag-line"></i>
        Buy Now
                    </button>
      
    </div>
    </Layout>
  )
}

export default Cart
