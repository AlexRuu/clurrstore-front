import { Order } from "@/types";

interface OrderPersonalDetailsProps {
  order: Order;
}

const OrderPersonalDetails: React.FC<OrderPersonalDetailsProps> = ({
  order,
}) => {
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
    <div>
      Customer Details
      <div>
        <p>{order.name}</p>
        <p>{order.email}</p>
        {order.phone && <p>{order.phone}</p>}
        <p>{address1}</p>
        {address2 && <p>{address2}</p>}
        <p>
          {city}, {state}, {country}
        </p>
        <p>{postalCode}</p>
      </div>
    </div>
  );
};

export default OrderPersonalDetails;
