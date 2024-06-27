import { useState } from "react"
import Layout from "./layout"
import app from "../../util/firebase-config"
import { getFirestore, addDoc,collection } from "firebase/firestore"

const db = getFirestore(app)


const Products = () => {
  
 

  const handleClose = ()=> {
    setProductModel(false)
    
  }
  const [Products,setProducts] = useState([])
   const model = {
    title:'',
    price:'',
    discount:'',
    disc:''
  }
  const [productForm,setProductForm] = useState(model)
  const [productModel,setProductModel] = useState(false)

  const handleOnChange = (e)=>{
   const input = e.target
   const value = input.value
   const key = input.name

   setProductForm({
    ...productForm,
    [key]: value
   })
  }
const createProduct = async (e) =>{
  try {
  e.preventDefault()
   await addDoc(collection(db,'products'),productForm)
   setProductForm(model)
   handleClose()
   
  }
  catch (error) {
  console.log(error);
  }  
  }
  
    return (
    <Layout>
    
    <div>
        <div className="flex justify-between items-center">
       <h1 className="text-xl font-semibold">Products</h1>
       <button onClick={()=>setProductModel(true)} className="bg-indigo-600 text-white rounded p-2 px-8">New Product</button>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {
        Products.map((item,index)=>(
            <div key={index} className="bg-white rounded-md shadow-lg">
                <img src={item.image} alt="" className="rounded-t-md w-full"/>
                   <div className="p-4">
                     <h1 className="text-md font-semibold">{item.title}</h1>
                      <p className="text-gray-400">{item.des}</p>
                      <div className="flex gap-2">
                        <label>
                            {item.price-(item.price*item.disc)/100}
                        </label>
                        <del className="font-semibold">{item.price}</del>
                        <label>({item.disc}% off)</label>
                      </div>
                   </div>
            </div>    
        ))
       }
       </div>
      
   {
    productModel && 
    <div className="bg-black bg-opacity-50 flex justify-center items-center absolute top-0 left-0 w-full h-full">
          <div className="bg-white w-6/12 py-3 px-6 rounded-md relative">
          <button className="absolute top-2 right-3" onClick={handleClose}>close</button>
                <h1 className="text-lg font-semibold"> New Product </h1>
          
                <form onSubmit={createProduct} className="grid grid-cols-2 gap-6 mt-6">
                    <input
                   required
                   name="title"
                   onChange={handleOnChange}
                    placeholder="Enter product title"
                    className="border p-2 col-span-2 border-gray-300 rounded"
                    value={productForm.title}
                    type="text" />
                    
                    <input
                    required
                     onChange={handleOnChange}
                    name="price"
                    placeholder="Enter product title"
                    value={productForm.price}
                    className="border p-2 border-gray-300 rounded"
                    type="number" />
                    <input
                     onChange={handleOnChange}
                    name="discount"
                    placeholder="Enter product title"
                    value={productForm.discount}
                    className="border p-2 border-gray-300 rounded"
                    type="number" />
                      <textarea
                   
                    name="disc"
                    onChange={handleOnChange}
                    placeholder="Enter product title"
                    value={productForm.disc}
                    className="border p-2 col-span-2 border-gray-300 rounded"
                    rows={8}
                    />
         <div>
                    <button className="bg-indigo-600  text-white rounded px-4 py-2">Submit</button>
         </div>
                </form>
          </div>
       </div>
   }
       
    </div>
    
    </Layout>
  )
}

export default Products
