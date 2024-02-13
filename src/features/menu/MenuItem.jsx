import { formatCurrency } from '../../utils/helpers';

import Button from '../../ui/Button';
import { addItemCart } from '../cart/cartSliceRedux';
import { useDispatch, useSelector } from 'react-redux';
import ChangeCountPizza from '../cart/ChangeCountPizza';
let newCartItem = '';
function MenuItem(prop) {
  const dispatch = useDispatch();
  const { name, unitPrice, ingredients, soldOut, imageUrl } = prop.pizza;
  const { cart} = useSelector((store) => store.cart);
  let item = cart.find((item) => item.name == name);
  function addCart() {
    newCartItem = {
      pizzaId:  Math.floor(Math.random()*18),
      name: name,
      unitPrice: unitPrice,
      quantity: 1,
    };
    dispatch(addItemCart(newCartItem));
  }

  return (
    <li className="flex w-full  gap-4  py-2 text-black">
      <img
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex h-24 w-full flex-col justify-between">
        <div className="">
          <p className="font-bold capitalize">{name}</p>
          <p className="capitalize">{ingredients.join(', ')}</p>
        </div>
        <div className="flex items-center justify-between ">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-gray-400">Sold out</p>
          )}
          <div className="relative">
            {item &&item.quantity>0 ? (
              <ChangeCountPizza item={newCartItem} />
            ) : (
              <Button
                disabled={soldOut ? true : false}
                click={addCart}
                style="w-[6rem] text-sm"
              >
                Add to cart
              </Button>
            )}
      
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
