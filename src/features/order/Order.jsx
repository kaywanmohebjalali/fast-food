// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import { getData } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

import OrderItem from './OrderItem'
import { useEffect } from "react";
import UpdatePriority from "./UpdatePriority";


function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff

 const {data} = useLoaderData()
 const {
   id,
   status,
   priority,
   priorityPrice,
   orderPrice,
   estimatedDelivery,
   cart
   
  } = data;

  const total = cart.reduce((pre, cur)=>pre+cur.totalPrice,0)

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const fetcher = useFetcher()

  useEffect(function(){
     if(!fetcher.data && fetcher.state==='idle'){
      fetcher.load('/menu')
     }
  },[fetcher])
 
 

  return (

    <div className="text-black px-4 py-6 space-y-8 text-xl">

      <div className="flex flex-wrap items-center justify-between  ">
        <h2 className="font-semibold text-2xl mr-[4.2rem] ">Order #{id} Status</h2>

        <div className="mt-2 sm:mt-0">
          {priority && <span className="uppercase text-base bg-orange-600 px-3 py-1  mr-4  rounded-full text-white">Priority</span>}
          <span className="uppercase text-base bg-sky-500 px-3 py-1 rounded-full text-white">{status} order</span>
        </div>
 
      </div>

      <ul className="divide-y-[1px] divide-stone-200 border-y-[1px]">

{
  cart && cart.map(item=><OrderItem item={item}  key={item.pizzaId} isLoading={fetcher.state==='loading'}
  ingredients={fetcher?.data?.data?.find(el=>el.name==item.name)}
  />)
}
  </ul>
      <div className="bg-zinc-200 px-4 py-8 flex flex-wrap items-center justify-between">
        <p className="mr-4">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div className="bg-gray-200 px-4 py-8 space-y-2">
        <p>Price pizza: {formatCurrency(total)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
     {!data.priority && <UpdatePriority order={data}/>}

    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(prop){
  const {orderId} = prop.params 

 
    const data = await getData(`order/${orderId}`)

    return data

}

export default Order;
