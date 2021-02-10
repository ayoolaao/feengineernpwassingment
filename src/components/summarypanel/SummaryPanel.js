import React, { useState, useEffect } from 'react';
import './summaryPanel.scss';
import { setPanelIsActive } from '../../redux/summaryPanelSlice';
import {useDispatch} from 'react-redux';
import SummaryCard from '../summaryCard/SummaryCard';

const SummaryPanel = ({ order, coordinates }) => {
  const { items } = order;
  const dispatch = useDispatch();
  const [style, setStyle] = useState();

  const generateCoordinateStyle = coordinate => {
    const {x, y} = coordinate;
    return {
      left: x - 400 + 'px',
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
      {items.length && items.map(item => (<SummaryCard item={item} key={item.id} />))}
    </div>
  );
};

SummaryPanel.defaultProps = {
  items: []
}

export default SummaryPanel;
