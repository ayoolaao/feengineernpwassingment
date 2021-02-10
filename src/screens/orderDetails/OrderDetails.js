import React from 'react';
import './orderDetails.scss';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ordersSelector } from '../../redux/ordersSlice';
import SummaryCard from '../../components/summaryCard/SummaryCard';
import ProgressBar from '../../components/progressBar/ProgressBar';

const OrderDetails = ({ match }) => {
  const history = useHistory();
  const { params: { orderId } } = match;
  const orders = useSelector(ordersSelector);

  const findOrder = (allOrders, id) => {
    if (!allOrders) history.push('/');
    else {
      return allOrders.find(order => order.orderId === Number(id))
    }
  }

  const order = findOrder(orders, orderId);
  const { status, shipments } = order;

  return (
    <div className='order-details'>
      <div className='order-details__status'>
        <h1 className='order-details__status-title'>Get Excited!</h1>
        <p className='order-details__status-text'>Fun stuff is headed your way</p>
      </div>

      <div className='order-details__progress-bar'>
        <ProgressBar status={status} shipDate={shipments[0].shipDate} estimatedDeliveryDate={shipments[0].estimatedDeliveryDate} />
      </div>

      <div className='order-details__items'>
        <h1 className='order-details__items-count'>Items shipped: {order.items.length}</h1>
      </div>

      <div className='order-details__shipments'>
        <div className='order-details__shipments-tracking'>
          {order.shipments.map(shipment => (
            <>
              <h1 className='order-details__carrier'>{shipment.carrier} tracking:</h1>
              <h1 className='order-details__tracking-number'>{shipment.trackingNumber}</h1>
              <div className='order-details__estimated-delivery'><span>Estimated delivery date: </span>{shipment.estimatedDeliveryDate.slice(0, 10)}</div>
            </>
          ))}
        </div>
      </div>

      <div className='order-details__address'>
        <h1>Address:</h1>
        <div>
          <p>{order.shipingAddress.street}</p>
          <p>{order.shipingAddress.city}, {order.shipingAddress.state} {order.shipingAddress.zip}</p>
        </div>
      </div>

      <div className='order-details__items'>
        {order.items.map(item => (<SummaryCard item={item} key={item.id} orderId={orderId} />))}
      </div>
    </div>
  );
};

export default OrderDetails;
