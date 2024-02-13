import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decrement, increment } from "./cartSliceRedux"
import { useState } from "react";

const ChangeCountPizza = (prop) => {
  const {pizzaId, quantity, unitPrice } = prop.item;
  const [count, setCount]=useState(quantity)
 

  const dispatch = useDispatch()
  function incrementItem(){
    setCount(c=>c<100?c+1:c)
    dispatch(increment({pizzaId,count:count<100?count+1:count,unitPrice}))
   }
  
   function decrementItem(){
    setCount(c=>c>0?c-1:c)
    count>0&& dispatch(decrement({pizzaId,count:count>0?count-1:count,unitPrice}))
   }
  return (
    <div className="flex gap-2 items-center">
    <Button click={incrementItem} style='!w-[2rem] !py-[0px]  uppercase'>+</Button>
     <p className='text-lg w-[1.1rem] text-center'>{count}</p>
    <Button click={decrementItem} style='!w-[2rem] !py-[0px]  uppercase'>-</Button>
  
    </div>
  )
}

export default ChangeCountPizza