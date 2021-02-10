import React, { useState, useEffect } from 'react';
import './summaryPanel.scss';
import { setPanelIsActive } from '../../redux/summaryPanelSlice';
import {useDispatch} from 'react-redux';
import SummaryCard from '../summaryCard/SummaryCard';
import ProgressBar from '../progressBar/ProgressBar';

const SummaryPanel = ({ order, coordinates }) => {
  const { items, orderId, status, shipments } = order;
  const dispatch = useDispatch();
  const [style, setStyle] = useState();

  const generateCoordinateStyle = coordinate => {
    const {x, y} = coordinate;
    return {
      left: x - 300 + 'px',
      top: y + 'px'
    };
  }

  useEffect(() => {
    const updatedStyle = generateCoordinateStyle(coordinates)
    setStyle(updatedStyle);
  }, [coordinates])

  const handleMouseEnter = () => {
    dispatch(setPanelIsActive(true));
  }

  const handleMouseLeave = () => dispatch(setPanelIsActive(false));

  return (
    <div style={style} className='summary-panel' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {items.length && items.map(item => (<SummaryCard item={item} key={item.id} orderId={orderId} />))}
      <div className='summary-panel__progressbar-container'>
        <ProgressBar
          status={status}
          shipDate={shipments[0].shipDate}
          estimatedDeliveryDate={shipments[0].estimatedDeliveryDate}
        />
      </div>
    </div>
  );
};

SummaryPanel.defaultProps = {
  items: []
}

export default SummaryPanel;
