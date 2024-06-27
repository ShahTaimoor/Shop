import { useState } from "react"
import Layout from "./layout"



const Orders = () => {
    const [orders,setOrders] = useState([
{
    orderId: '#ewrwe',
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    products: 'apple',
    amount:40000,
    date: '12-12-2000',
    status: 'pending'

},
{
    orderId: '#ewrwe',
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    products: 'apple',
    amount:40000,
    date: '12-12-2000',
    status: 'pending'

},
{
    orderId: '#ewrwe',
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    products: 'apple',
    amount:40000,
    date: '12-12-2000',
    status: 'pending'

},
{
    orderId: '#ewrwe',
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    products: 'apple',
    amount:40000,
    date: '12-12-2000',
    status: 'pending'

},
{
    orderId: '#ewrwe',
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    products: 'apple',
    amount:40000,
    date: '12-12-2000',
    status: 'pending'

},
{
    orderId: '#ewrwe',
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    products: 'apple',
    amount:40000,
    date: '12-12-2000',
    status: 'pending'

},
{
    orderId: '#ewrwe',
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    products: 'apple',
    amount:40000,
    date: '12-12-2000',
    status: 'pending'

},
{
    orderId: '#ewrwe',
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    products: 'apple',
    amount:40000,
    date: '12-12-2000',
    status: 'pending'

},
{
    orderId: '#ewrwe',
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    products: 'apple',
    amount:40000,
    date: '12-12-2000',
    status: 'pending'

},
{
    orderId: '#ewrwe',
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    products: 'apple',
    amount:40000,
    date: '12-12-2000',
    status: 'pending'

},
{
    orderId: '#ewrwe',
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    products: 'apple',
    amount:40000,
    date: '12-12-2000',
    status: 'pending'

},
{
    orderId: '#ewrwe',
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    products: 'apple',
    amount:40000,
    date: '12-12-2000',
    status: 'pending'

},
{
    orderId: '#ewrwe',
    customerName: 'Taimoor',
    email: 'taimoor@gmail.com',
    mobile: '099878676',
    products: 'apple',
    amount:40000,
    date: '12-12-2000',
    status: 'pending'

}

    ])
  return (
<Layout> 
     <div>
      <h1 className="text-xl font-semibold">Orders</h1>
      <div className="mt-6">
        <table className="w-full">
            <thead>
                <tr className="bg-rose-600 twxt-white">
                    <th className="py-4">OrderId</th>
                    <th>Customer's Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
               {
                orders.map((item,index)=>(
                  <tr key={index} className="text-center" style={{
                    background: (index+1)%2 === 0 ? '#f1f5f9' : 'white'
                  }}>
                    <td className="py-4">{item.orderId}</td>
                    <td className="capitalize">{item.customerName}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td className="capitalize">{item.products}</td>
                    <td>{item.amount.toLocaleString()}</td>
                    <td>{item.date}</td>
                    <td className="capitalize">
                        <select className="p-1 border border-gray-200">
                            <option value="pending">Pending</option>
                             <option value="processing">Processing</option>
                             <option value="dispatched">Dispatched</option>
                             <option value="return">Return</option>
                        </select>
                    </td>
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

export default Orders
