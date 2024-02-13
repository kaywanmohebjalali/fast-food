import { useRef, useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch} from 'react-redux';
import {updateName} from './userRedux'
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [show, setShow]= useState(false)
  const username=useRef(false)
  const dispatch = useDispatch()
  const navigate= useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handlerCreateUser(){

    if(username.current.value){
      dispatch(updateName(username.current.value))
      navigate('/menu')
    }
  }

  return (
    <form onSubmit={handleSubmit} className=" w-2/3 mx-auto space-y-8">
      <p className='text-sm sm:text-base md:text-lg'>👋 Welcome! Please start by telling us your name:</p>

      <input
        ref={username}
        className="input w-11/12 "
        type="text"
        placeholder="Your full name"
        defaultValue={username.current.value}
        onChange={(e) => setShow(Boolean(e.target.value))}
    
      />
       
       <div className="mt-2 p-2">

       {
         show &&
         <Button click={handlerCreateUser}>
         Start ordering
        </Button>
        }
       </div>
     
    </form>
  );
}

export default CreateUser;
