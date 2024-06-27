import Layout from "./Layout";
import React, { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import app from "../util/firebase-config";
import { getFirestore , collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged,getAuth } from "firebase/auth";
const db = getFirestore(app)
const auth = getAuth(app)

const Home = () => {
  const [session,setSession] = useState(null)
  const [products , setProducts] = useState([
     
    {
      title: 'New Blue Shirts Men',
      price:1200,
      disc:15,
      thumbnail:'/images/products/p1.jpeg'
    },
    {
      title: 'New Blue Shirts Men',
      price:1200,
      disc:15,
      thumbnail:'/images/products/p2.jpeg'
    },
    {
      title: 'New Blue Shirts Men',
      price:1200,
      disc:15,
      thumbnail:'/images/products/p3.jpeg'
    },
    {
      title: 'New Blue Shirts Men',
      price:1200,
      disc:15,
      thumbnail:'/images/products/p4.jpeg'
    },
    {
      title: 'New Blue Shirts Men',
      price:1200,
      disc:15,
      thumbnail:'/images/products/p5.jpeg'
    },
    {
      title: 'New Blue Shirts Men',
      price:1200,
      disc:15,
      thumbnail:'/images/products/p6.jpeg'
    },
    {
      title: 'New Blue Shirts Men',
      price:1200,
      disc:15,
      thumbnail:'/images/products/p7.jpeg'
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

     const addToCart = async (item)=>{
      try{
        item.userId = session.uid
        await addDoc(collection(db,'carts'),item)
      } catch(err){
console.log(err);
      }    
    }


  return (
    <Layout>
      <div>
        <header
    >
          <Swiper 
            
            spaceBetween={30}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper z-[-1]"
          >
            <SwiperSlide className="mb-5 bg-red-500" >
              <img src="/images/hero.jpg" alt="" className=""/>
            </SwiperSlide>
            <SwiperSlide className="mb-5">
              <img src="/images/hero.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="mb-5">
              <img src="/images/hero.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </header>
        
        <div className="p-16">
          <h1 className="text-4xl font-bold text-center mb-10">Latest Products</h1>
              <div className="md:w-10/12 mx-auto grid md:grid-cols-4  gap-12">
                    {
                      products.map((item,index) =>(
                        <div key={index} className="bg-white shadow-lg">
                            <img src={item.thumbnail} alt="" className="w-full"/>
                            <div className="pp-4">

                              <h1 className="text-lg font-semibold">{item.title}</h1>
                              <div className="space-x-2">
                                <label>{item.price-(item.price*item.disc)/100}</label>
                                <del>{item.price}</del>
                                <label>{item.disc}%</label>
                              </div>
                              <button className="w-full py-2 bg-green-500 mt-2 rounded">Buy Now</button>
                               <button onClick={()=>addToCart(item)} className="w-full py-2 bg-rose-500 mt-2 rounded">Add To Cart</button>

                            </div>
                        </div>
                      ))
                    }
              </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
