import React from 'react';
import './progressBar.scss';

const ProgressBar = ({ status, shipDate, estimatedDeliveryDate }) => {
  const generateDate = (shipDate, estimatedDeliveryDate, status) => {
    switch (status) {
      case 'ordered':
        return (<> {`Expected to ship: ${shipDate.slice(0, 10)}`} </>);
      case 'shipped':
        return (<> {`Shipped on: ${shipDate.slice(0, 10)}`} </>);
      case 'delivered':
        return (<> {`Arrived: ${estimatedDeliveryDate.slice(0, 10)}`} </>);
      default:
        return (<>{'Status Unknown'}</>);
    }
  }

  return (
    <div className='progress-bar'>
      <div className='progress-bar__icons'>
        <h1 className='progress-bar__ordered'>📦</h1>
        <h1 className='progress-bar__shipped'>🚍</h1>
        <h1 className='progress-bar__delivered'>🏠</h1>
      </div>
      <p className='summary-card__shipping-info'>{generateDate(shipDate, estimatedDeliveryDate, status)}</p>
    </div>
  );
};

export default ProgressBar;
