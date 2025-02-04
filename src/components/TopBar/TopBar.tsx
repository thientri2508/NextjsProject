const TopBar = () => {
  return (
    <div className="hidden md:block w-full h-[40px] bg-black">
      <div className="w-[1300px] max-w-[90%] m-auto h-full text-white text-[13px] flex gap-7 justify-end items-center">
        <div className="category">Look up orders</div>
        <div className="category">Find a store</div>
        <div className="category">Favourite</div>
        <div className="category">Log in</div>
      </div>
    </div>
  );
};

export default TopBar;
