import Layout from "./layout"
import { useState } from "react"

const Payment = () => {
    const [payments,setPayments] = useState([
{
    
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    amount:5000,
    date: '12-12-2000'
    
}

    ])
  return (
<Layout> 
     <div>
      <h1 className="text-xl font-semibold">Payments</h1>
      <div className="mt-6">
        <table className="w-full">
            <thead>
                <tr className="bg-rose-600 text-left text-white">
                  
                    <th  className="py-4">Customer's Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Amount</th>
                    <th>Date</th>
                    
                </tr>
            </thead>

            <tbody>
               {
                payments.map((item,index)=>(
                  <tr key={index} style={{
                    background: (index+1)%2 === 0 ? '#f1f5f9' : 'white'
                  }}>
                
                    <td className="capitalize py-4">
                        <div className="flex gap-3 items-center">
                          <img src="/images/avatar.jpg" alt="" className="
                          w-10 h-10 rounded-full" />
                        <div className="flex flex-col justify-center">
                        <span className="font-semibold"> 
                            {item.customerName}</span>
                                                   
                        <small>{item.date}</small>
                        </div>
                        </div>
                        
                        
                        </td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.amount.toLocaleString()}</td>
                    <td>{item.date}</td>
                    
                </tr>
                ))
               }
            </tbody>
        </table>
      </div>
    </div>
    </Layout>
  )
}


export default Payment
