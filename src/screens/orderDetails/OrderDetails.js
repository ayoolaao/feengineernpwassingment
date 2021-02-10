import React from 'react';

const OrderDetails = ({ match }) => {
  console.log(match)
  const { params: { orderId } } = match;

  return (
    <div>
      OrderDetails for {orderId}
    </div>
  );
};

export default OrderDetails;
