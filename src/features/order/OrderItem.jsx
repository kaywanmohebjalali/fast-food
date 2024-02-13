import {formatCurrency} from '../../utils/helpers'

function OrderItem(prop) {
  const { item,ingredients,isLoading} =prop
  const { quantity, name, totalPrice } = item;

 

  return (
    <li className='py-3'>
      <div className='flex justify-between items-center gap-y-40'>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p className='text-base font-bold'>{formatCurrency(totalPrice)}</p>

      </div>
      <p>{isLoading?'loading...':ingredients?.ingredients.join(', ')}</p>
    </li>
  );
}

export default OrderItem;
