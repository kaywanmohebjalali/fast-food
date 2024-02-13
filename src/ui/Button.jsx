
import { memo } from "react";
import { Link } from "react-router-dom"




const Button = (prop) => {
  const {type='button',to='', children = '', click = null, disabled = '', style = '' } = prop;
  const className =` w-[8rem]  cursor-pointer rounded-md border-2 border-indigo-400 px-2 py-1 transition duration-200 
ease-in-out hover:bg-indigo-500 hover:text-white  disabled:cursor-not-allowed 
 disabled:opacity-60    text-center shadow-lg active:shadow-none 
${style}`
  
  
  
  if(to &&type=='link'){
    return (
      <Link onClick={click} to={to} className={`block text-blue-500 hover:text-indigo-700  font-semibold transform hover:-translate-x-2      transition-transform  ease-in-out duration-500 ${style}`}>{children}</Link> 
  
    )
  }

 

  else if(to && type=='button'){
    return (
      
      <Link
      to={to}
        className={className}
        onClick={click}
        disabled={disabled}
      >
        {children}
      </Link>
    );
  }
  
  
  return (
    
    <button
      className={className}
      onClick={click}
      disabled={disabled}
      >
      {children}
    </button>

  );
};

export default memo(Button);




