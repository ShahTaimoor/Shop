import Layout from "./Layout"
import app from "../util/firebase-config"
import { onAuthStateChanged,getAuth,updateProfile } from "firebase/auth"
 import {getStorage ,ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getFirestore, collection, addDoc , getDocs, query, where,updateDoc ,doc} from "firebase/firestore"

const auth = getAuth(app)
const storage = getStorage()

const db = getFirestore(app)

const Profile = () => {
  const navigate = useNavigate()
  const [uploading,setUploading] = useState(false)
  const [session,setSession] = useState(null)
  const [form,setForm] = useState({
    fullname:'',
    email:'',
    mobile:'',
   
  })
const [id,setId] =  useState(null)
const [isUpdated,setIsUpdated] = useState(false)
  const [address,setAddress] = useState({
     address:'',
    city:'',
    state:'',
    country:'',
    pincode:'',
    userId:''
  })
  
  
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if (user) {
        setSession(user)
      }else{
        setSession(false)
        navigate('/login')
      }
    })
  },[])

  useEffect(()=>{
const req = async ()=>{
 if (session) 
  {
      setForm({
        ...form,
        fullname: session.displayName,
        mobile: session.phoneNumber
      })
      setAddress({
        ...address,
        userId:session.uid
      })

      // fetching address

     const col = collection(db,'addresses')
    const q =  query(col,where('userId','==',session.uid))
    
    const snapshot = await getDocs(q)
   setIsAddress(!snapshot.empty)
     snapshot.forEach((doc)=>{
      setId(doc.id)
     const venue = doc.data()
     setAddress({
      ...address,
      ...venue
     })
    })
    }
}

   req()
  },[session , isUpdated])

const [isAddress,setIsAddress] = useState(false)

const handleOnChange = (e)=>{
  const input = e.target
  const value = input.value
  const key = input.name
  setForm({ 
    ...form,
    [key]: value
  })
}

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


  const submit = async (e)=>{
  e.preventDefault()
  const temp = form
  delete temp.email
  await updateProfile(auth.currentUser,{
    displayName:form.fullname,
    phoneNumber:form.mobile
  })

  }

  const setProfilePic = async (e)=>{
     const input = e.target
     const file = input.files[0]
     const filenamearr = file.name.split('.')
     const ext = (filenamearr[filenamearr.length-1]);
     const filename = Date.now()+'.'+ext
     const path = `picture/${filename}`
     const bucket = ref(storage,path)
     setUploading(true)
     const snapshot = await uploadBytes(bucket,file)
     const url = await getDownloadURL(snapshot.ref)
     await updateProfile(auth.currentUser,{
      photoURL:url
     })
    setUploading(false)
     setSession({
      ...session,
      photoURL:url
     })
    
  }
 

  const addAddress = async (e)=>{
  try {
    e.preventDefault()
       await addDoc(collection(db,'addresses'),address)
       setIsAddress(true)
      setIsUpdated(!isUpdated)
  } catch (error) {
    console.log(error);
  }
  }

  const updateAddress = async (e)=>{
  try {
    e.preventDefault()
     const ref = doc(db,'addresses', id)
     await updateDoc(ref,address)
     
     
  } catch (error) {
    console.log(error);
  }
  }

  const handleOnAddress = (e)=>{
    const input = e.target
  const value = input.value
  const key = input.name
  setAddress({ 
    ...address,
    [key]: value
  })
  }

    return (
  
    <Layout>
    

    <div className="mx-auto my-16 shadow-lg p-8 rounded-md md:w-7/12">
    
     <div className="flex gap-3">
        <i className="ri-user-line text-4xl"></i>
        <h1 className="text-3xl font-semibold">Profile</h1>
     </div>
     <hr className="my-6"/>
     <div className=" w-24 h-24 mx-auto relative hover:opacity-80 ">
      {
        uploading ?
        <img src="/images/loader.gif" alt="" />
        :
     <img  src= { session.photoURL ? session.photoURL :  '/images/signup.svg'}  className="w-24 h-24 rounded-full " />
      }
     <input onChange={setProfilePic} type="file" accept="image/*" className="opacity-0 absolute  w-full h-full cursor-pointer top-0 left-0" />
     </div>
     <form onSubmit={submit} className="grid grid-cols-1 gap-6">
        <div className="flex flex-col gap-4">
            <label className="text-lg font-semibold">Fullname</label>
            <input
            className="p-2 rounded border border-gray-300"
            type="text"
            onChange={handleOnChange}
            name="fullname"
            value={form.fullname} />  
        </div>
        <div className="flex flex-col gap-4">
            <label className="text-lg font-semibold">Email</label>
            <input
            className="p-2 rounded border border-gray-300"
            type="email"
            onChange={handleOnChange}
            name="email"
            value={session.email} />  
        </div>
        <div className="flex flex-col gap-4 w-72">
            <label className="text-lg font-semibold">Mobile</label>
            <input
            className="p-2 rounded border border-gray-300"
            type="number"
            onChange={handleOnChange}
            name="mobile"
            value={form.mobile} />  
        </div>
        
        
   

        <button className="px-10 py-2 bg-rose-600 text-white rounded w-fit">Save</button>
     </form>
    </div>

     <div className="mx-auto my-16 shadow-lg p-8 rounded-md md:w-7/12">
    
     <div className="flex gap-3">
        <i className="ri-user-line text-4xl"></i>
        <h1 className="text-3xl font-semibold">Delivery Address</h1>
     </div>
     <hr className="my-6"/>
     
     <form onSubmit={isAddress? updateAddress: addAddress} className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 col-span-2">
            <label className="text-lg font-semibold">Area</label>
            <input
            className="p-2 rounded border border-gray-300"
            type="text"
            onChange={handleOnAddress}
            name="address"
            value={address.address}
             />  
        </div>
        <div className="flex flex-col gap-4">
            <label className="text-lg font-semibold">City</label>
            <input
            className="p-2 rounded border border-gray-300"
            type="text"
            onChange={handleOnAddress}
            name="city"
            value={address.city}
             />  
        </div>
        <div className="flex flex-col gap-4 ">
            <label className="text-lg font-semibold">State</label>
            <input
            className="p-2 rounded border border-gray-300"
            type="text"
            value={address.state}
            onChange={handleOnAddress}
            name="state"
         />  
        </div>
        <div className="flex flex-col gap-4 ">
            <label className="text-lg font-semibold">Country</label>
            <input
            className="p-2 rounded border border-gray-300"
            type="text"
            value={address.country}
            onChange={handleOnAddress}
            name="country"
         />  
        </div>
        <div className="flex flex-col gap-4 ">
            <label className="text-lg font-semibold">Pincode</label>
            <input
            className="p-2 rounded border border-gray-300"
            type="number"
            onChange={handleOnAddress}
            name="pincode"
            value={address.pincode}
           />  
        </div>
        
        
        {
          isAddress ?
          <button className="px-10 py-2 bg-rose-600 text-white rounded w-fit">Save</button>
          :
          <button className="px-10 py-2 bg-orange-600 text-white rounded w-fit">Submit</button>
        }


     </form>
    </div>
    
    </Layout>
  )
}

export default Profile
