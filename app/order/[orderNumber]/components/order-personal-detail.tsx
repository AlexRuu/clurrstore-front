import { Order } from "@/types";

interface OrderPersonalDetailsProps {
  order: Order;
}

const OrderPersonalDetails: React.FC<OrderPersonalDetailsProps> = ({
  order,
}) => {
  // Break down address information retrieved
  const address = order.address.split(",");
  let address1, address2, city, state, postalCode, country;
  if (address.length == 5) {
    address1 = address[0];
    address2 = null;
    city = address[1];
    state = address[2];
    postalCode = address[3];
    country = address[4];
  } else {
    address1 = address[0];
    address2 = address[1];
    city = address[2];
    state = address[3];
    postalCode = address[4];
    country = address[5];
  }

  return (
    <div className="w-full mt-10 med-small:px-10">
      {/* Display customers order details */}
      <div className="mb-10 w-full justify-center text-center flex flex-col items-center">
        <h3 className="text-lg mb-4">Order Details</h3>
        <div className="text-sm flex flex-nowrap justify-between medium-min:w-1/3 med-small:w-full">
          <div className="mr-8 text-left">
            <h6 className="text-base">Customer Details</h6>
            <p>Name: {order.name}</p>
            <p>Email: {order.email}</p>
            {order.phone && <p>Phone: {order.phone}</p>}
          </div>
          <div className="text-right">
            <h6 className="text-base">Ship To</h6>
            <p>{order.name}</p>
            <p>{address1}</p>
            {address2 && <p>{address2}</p>}
            <p>
              {city}, {state}, {country}
            </p>
            <p>{postalCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPersonalDetails;
