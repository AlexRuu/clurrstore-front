"use client";

interface OrderHeaderProps {
  orderNumber: string;
}

const ProfileOrderHeader: React.FC<OrderHeaderProps> = ({ orderNumber }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center flex-nowrap">
        <h1 className="text-4xl mt-5 my-3">Order Details</h1>
        {/* <p>Thank you for your support!</p> */}
        <p>Order Number: #{orderNumber}</p>
      </div>
    </>
  );
};

export default ProfileOrderHeader;
