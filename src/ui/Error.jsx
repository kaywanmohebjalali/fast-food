import { useNavigate, useRouteError } from 'react-router-dom';
import Button from './Button';


function NotFound() {
  
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className='text-black flex flex-col justify-center items-center mt-16 sm:text-lg md:text-2xl space-y-2'>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <Button type='link' to='/' click={() => navigate(-1)}>&larr; Go back</Button>
    </div>
  );
}

export default NotFound;
