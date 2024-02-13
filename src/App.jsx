

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './ui/Home'
import  Menu, {loader as menuLoader} from './features/menu/Menu'
import  Cart from './features/cart/Cart';
import CreateOrder, {action as orderAction} from './features/order/CreateOrder'
import Order, {loader as orderLoader} from './features/order/Order'
import Error from './ui/Error'
import {action as updatePriorityAction} from './features/order/UpdatePriority'
const  router =createBrowserRouter([
  {
   path:'/',
   element:<AppLayout/>,
   errorElement:<Error/>,
   children:[
    {path:'/', element:<Home/>},
    {path:'/menu', element:<Menu/>, loader:menuLoader, errorElement:<Error/>},
    {path:'/cart', element:<Cart/>},
    {path:'/order/new', element:<CreateOrder/>, action:orderAction ,errorElement:<Error/>},
    {path:'/order/:orderId', element:<Order/> , loader:orderLoader,
     errorElement:<Error/>, action:updatePriorityAction},
   ]
  
  }
 
])

const App = () => {
 
  return <RouterProvider router={router}/>

}
export default App