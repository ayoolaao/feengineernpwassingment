import React from 'react';
import './summaryCard.scss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSelectedOrder } from '../../redux/ordersSlice';
import { setPanelIsActive, setPanelIsVisible } from '../../redux/summaryPanelSlice';

const SummaryCard = ({ item, orderId }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    id: itemId,
    name,
    plan,
    skuAttributes,
    quantity,
    telephoneNumber
  } = item;

  const handleClick = () => {
    dispatch(setSelectedOrder(orderId));
    dispatch(setPanelIsActive(false));
    dispatch(setPanelIsVisible(false));
    history.push(`/order/${orderId}`);
  };

  return (
    <div id={itemId} className='summary-card' onClick={handleClick}>
      <div className='summary-card__item-image'>
        <img src="https://via.placeholder.com/80x100" alt="item" />
      </div>
      <div className='summary-card__item-details'>
        <div className='summary-card__item-attributes'>
          <h1>{name}</h1>
          <p>{skuAttributes.color}</p>
          <p>{skuAttributes.size}</p>
          <p>Qty: {quantity}</p>
          <p>{telephoneNumber}</p>
          <p>{plan}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
