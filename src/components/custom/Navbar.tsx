const Navbar = () => {
  return (
    <>
      <div className="l-0 r-0 z-50 sticky top-4 m-auto mt-4 flex  w-[80%] justify-between rounded-lg border border-[#343434] bg-[#0a0a0a] bg-opacity-50 px-10 py-3 text-xl backdrop-blur-lg backdrop-filter ">
        <div className="text-2xl">mask</div>
        <div className="flex gap-4">
          <span>Features</span>
          <span>About Us</span>
          <span>Github</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
