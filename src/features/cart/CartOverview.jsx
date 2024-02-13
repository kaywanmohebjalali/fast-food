import { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
function CartOverview() {
  const {totalAllCartPrice,cart} = useSelector(store=>store.cart)
  let allCountPizza = cart.reduce((pre,cur)=>pre+(cur.quantity),0)
  
  if(cart.length==0)return null
  return (
    <div className="bg-sky-600 uppercase p-4 text-sm md:text-lg flex-center">
      <p className="text-stone-300 space-x-4 md:space-x-6">
        <span>{allCountPizza} pizzas</span>
        <span>${totalAllCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(CartOverview);
