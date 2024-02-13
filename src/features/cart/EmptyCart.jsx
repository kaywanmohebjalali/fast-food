import Button from '../../ui/Button';

function EmptyCart() {
  return (
    <div className='mt-20 space-y-4 text-black flex flex-col justify-center items-center'>

      <p className='text-xl'>Your cart is still empty. Start adding some pizzas :)</p>
      <Button style={'text-lg'} type='link' to="/menu">&larr; Back to menu</Button>
    </div>
  );
}

export default EmptyCart;
