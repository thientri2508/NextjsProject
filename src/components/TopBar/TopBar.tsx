const TopBar = () => {
  return (
    <div className="hidden md:block w-full h-[40px] bg-black">
      <div className="w-[1300px] max-w-[90%] m-auto h-full text-white text-[13px] flex gap-7 justify-end items-center">
        <div className="category">Tra cứu đơn hàng</div>
        <div className="category">Tìm cửa hàng</div>
        <div className="category">Yêu thích</div>
        <div className="category">Đăng nhập</div>
      </div>
    </div>
  );
};

export default TopBar;
