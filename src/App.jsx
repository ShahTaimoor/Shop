import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import NoFound from './components/nofound'
import Products from './components/admin/Product'
import Orders from './components/admin/Orders'
import Dashboard from './components/admin/Dashboard'
import Customer from './components/admin/Customer'
import Payment from './components/admin/Payment'
import Setting from './components/admin/Setting'
import Home from './components/Home'
import Product from './components/Products'
import Category from './components/Category'
import Login from './components/Login'
import Signup from './components/Signup'
import Contact from './components/Contact'
import PreGuard from './components/Guard/PreGuard'
import Cart from './components/Cart'
import Profile from './components/Profile'
function App() {
 
  return (
    <>
    
     <BrowserRouter>
       <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/products' element={<Product/>}/>
<Route path='/category' element={<Category/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route element={<PreGuard/>}>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
</Route>


<Route path='/contact-us' element={<Contact/>}/>




     <Route path='/admin'> 
           <Route path='products' element={< Products/>}/>
           <Route path='orders'   element={< Orders/>} />
              <Route path='dashboard'   element={< Dashboard/>} />
                 <Route path='customers'   element={< Customer/>} />
                    <Route path='payments'   element={< Payment/>} />
                       <Route path='settings'   element={< Setting/>} />
                      
     </Route>

     <Route path='*' element={<NoFound/>} />

   

       </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
