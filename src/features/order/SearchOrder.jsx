import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchOrder = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handlerSubmit(e) {
    
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form
      onSubmit={handlerSubmit}
      className="relative flex w-1/2 items-center text-black"
    >
      <input
        className="w-full rounded-full p-1 px-4 outline-none ring-stone-100  ring-opacity-40 focus:ring-4"
        value={query}
        placeholder="search order..."
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
      <svg
      onClick={handlerSubmit}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute right-2 h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </form>
  );
};

export default SearchOrder;
