const ProfileOrderInfo = () => {
  return (
    <div>
      <h1 className="text-2xl">Orders</h1>
      {/* Need order number, payment status, total payment, date of order, a view order tab */}
      <div className="small:my-5 max-w-[1600px] m-[0_auto] block">
        <ul className="small:mt-[30px] m-0 p-0">
          <li className="small:hidden border-t border-solid border-[#f3f3f3] mt-[30px] pb-[15px] pt-0 flex justify-between border-b flex-nowrap">
            <span className="mt-[15px] pl-0 flex-grow">Order Number</span>
            <span className="pt-[15px] pl-0 md-max:w-[120px] md-max:min-w-[120px] flex-[0_0_auto] text-center w-[16.67%] min-w-[145px]">
              Order Date
            </span>
            <span className="pt-[15px] pl-0 w-[12.5%] min-w-[145px] flex-[0_0_auto] text-center">
              Payment Status
            </span>
            <span className="pt-[15px] pl-0 text-right md-max:w-[100px] md-max:min-w-[100px] flex-[0_0_auto] min-w-[145px]">
              Order Total
            </span>
            <span className="pt-[15px] pl-0 text-right md-max:w-[100px] md-max:min-w-[100px] flex-[0_0_auto] min-w-[145px]">
              View Order
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileOrderInfo;
