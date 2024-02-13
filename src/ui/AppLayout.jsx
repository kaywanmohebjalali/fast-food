import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

const AppLayout = () => {
  const navigate = useNavigation();
  const loading = navigate.state;
  
  return (
    <>
      {loading === 'loading' && <Loader />}

      
        <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
          <Header />
          <main className='container overflow-auto max-w-3xl'>
            {loading !== 'loading' &&<Outlet />}
          </main>
          <CartOverview />
        </div>
    
    </>
  );
};

export default AppLayout;
