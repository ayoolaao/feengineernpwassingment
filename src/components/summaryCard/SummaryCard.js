import React from 'react';
import './summaryCard.scss';

const SummaryCard = ({ item }) => {
const { estimatedShipDateRange, name, newEstimatedShipDateRange, plan, skuAttributes, status, quantity, telephoneNumber } = item;
  const generateDate = (expDateRanges, newDateRanges, status) => {
    switch (status) {
      case 'ordered':
        return (<> {`Expected to ship: ${expDateRanges['fromDate'].slice(0, 10)}`} </>);
      case 'shipped':
        return (<> {`Shipped on: ${newDateRanges['fromDate'].slice(0, 10)}`} </>);
      case 'delivered':
        return (<> {`Arrived: ${newDateRanges['toDate'].slice(0, 10)}`} </>);
      default:
        return (<>{'Status Unknown'}</>);
    }
  }

  return (
    <div className='summary-card'>
      <div className='summary-card__item-image'>.</div>
      <div className='summary-card__item-details'>
        <div>Progress Bars Here</div>
        <div className='summary-card__shipping-info'>{generateDate(estimatedShipDateRange, newEstimatedShipDateRange, status)}</div>
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
