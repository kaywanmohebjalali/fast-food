import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser'
import Button from './Button';
function Home() {
  const{userName:name}=useSelector(store=>store.user)
  return (
    <div className="text-black text-center">
      <h1 className="mb-6 sm:text-xl lg:text-2xl">
        The best pizza.
        <br />
        <span className="font-bold text-yellow-400 sm:text-2xl lg:text-3xl">
          Straight out of the oven, straight to you.
        </span>
      </h1>
    {!name?  <CreateUser/>:


    <Button  to='/menu' style='block mx-auto !w-[8rem] !mt-36'>Menu</Button>
 


  }

    
    </div>
  );
}

export default Home;
