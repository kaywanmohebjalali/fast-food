const Loader = () => {
  return (
    <div className="w-11/12 text-black flex p-4 items-center backdrop-blur-sm text-xl h-[94vh] justify-center absolute">
      <svg className="border-t-2 border-r-2 rounded-full border-indigo-400 mr-3 h-6 w-6 animate-spin" viewBox="0 0 24 24"></svg>
      loading...
     </div>
  );
};

export default Loader;
