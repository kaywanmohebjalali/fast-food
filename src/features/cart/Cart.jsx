import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import CartItem from '../cart/CartItem'
import {clearAllCart} from './cartSliceRedux'
import EmptyCart from './EmptyCart'
import { formatCurrency } from '../../utils/helpers';

function Cart() {
  const dispatch = useDispatch()
  const {user:{userName},cart:{cart}}= useSelector(store=>store)
  const {totalAllCartPrice}=useSelector(store=>store.cart)
 function clearCart(){
  dispatch(clearAllCart())
 }
 if(cart.length==0) return <EmptyCart/>
  return (
    <div className='text-black w-full  px-4 py-4'>
<Button type='link' to='/menu' > &larr; Back to menu  </Button>

      <h2 className='mt-8 mb-2 text-xl font-semibold'>Your cart, {userName}</h2>
  <ul className=' divide-y-[1px] divide-stone-300 border-b-[1px] border-stone-300 mb-4'>
  {cart && cart.map(item=><CartItem item={item} key={item.pizzaId}/>)}
  <br/>
 <p className='text-black pb-10 pt-4 font-semibold'> totalPrice : ${formatCurrency(totalAllCartPrice)}</p>
  </ul>
      <div className='flex items-center gap-4'>
        <Button style='!rounded-full font-semibold' to="/order/new">Order pizzas</Button>
   
      {cart.length>0 &&  <Button click={clearCart} style='!rounded-full border-gray-500 hover:bg-gray-600 font-semibold'>Clear cart</Button>}
      </div>
    </div>
  );
}

export default Cart;
