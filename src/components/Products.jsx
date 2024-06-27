import Layout from "./Layout";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Product = () => {
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
  return (
    <Layout>
      <div>
               
        <div className="p-16">
          <h1 className="text-4xl font-bold text-center mb-10">All Products</h1>
              <div className="md:w-10/12 mx-auto grid md:grid-cols-4  gap-12">
                    {
                      products.map((item,index) =>(
                        <div key={index} className="bg-white shadow-lg">
                            <img src={item.thumbnail} alt=""  className="w-full" />
                            <div className="pp-4">

                              <h1 className="text-lg font-semibold">{item.title}</h1>
                              <div className="space-x-2">
                                <label>{item.price-(item.price*item.disc)/100}</label>
                                <del>{item.price}</del>
                                <label>{item.disc}%</label>
                              </div>
                              <button className="w-full py-2 bg-green-500 mt-2 rounded">Buy Now</button>
 <button className="w-full py-2 bg-rose-500 mt-2 rounded">Add To Cart</button>
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

export default Product;
