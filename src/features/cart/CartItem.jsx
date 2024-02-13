import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import {formatCurrency} from '../../utils/helpers'
import {deleteItemCart} from './cartSliceRedux'
import { memo} from 'react';
import ChangeCountPizza from './ChangeCountPizza';

// eslint-disable-next-line react-refresh/only-export-components
function CartItem(prop) {
  const {pizzaId, name, quantity, totalPrice} = prop.item;
  const dispatch = useDispatch()
 function deleteCartItem(){
  dispatch(deleteItemCart(pizzaId))
 }
 

  return (
    <li className='py-4 flex items-center justify-between'>
      <div className="">
      <p className='text-sm md:text-lg font-semibold '>
        {quantity}&times; {name}
      </p>
      <div>
        <p className='opacity-70 mt-1 '>{formatCurrency(totalPrice)}</p>
      </div>
      </div>
      <div className="flex  gap-2">

      <ChangeCountPizza item={prop.item}/>
      <Button click={deleteCartItem} style='!w-[5rem] !py-[1px] !rounded-full uppercase !border-red-500 hover:bg-red-500'>delete</Button>
      </div>
    </li>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(CartItem);
