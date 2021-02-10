import React from 'react';
import './globalNav.scss';
import { useDispatch } from 'react-redux';
import { setXyLocation, setPanelIsVisible } from '../../redux/summaryPanelSlice';

const GlobalNav = () => {
  const dispatch = useDispatch();

  const handleMouseEnter = event => {
    const {right, bottom} = event.target.getBoundingClientRect();

    dispatch(setXyLocation({x: right, y: bottom}));
    dispatch(setPanelIsVisible(true));
  };

  const handleMouseLeave = () => dispatch(setPanelIsVisible(false));

  return (
    <nav className='global-nav'>
      <div className='global-nav__left'>
        <span className='global-nav__item'>Products</span>
        <span className='global-nav__item'>Brands</span>
        <span className='global-nav__item'>Deals</span>
        <span className='global-nav__item'>Services</span>
      </div>

      <div className='global-nav__right'>
        <span className='global-nav__item'>Account</span>
        <span className='global-nav__item'>Recently Viewed</span>
        <span className='global-nav__item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Order Status</span>
        <span className='global-nav__item'>Saved Items</span>
      </div>
    </nav>
  );
};

export default GlobalNav;
