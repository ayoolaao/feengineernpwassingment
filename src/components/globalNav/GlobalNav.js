import React, { useState } from 'react';
import './globalNav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setXyLocation, setPanelIsVisible } from '../../redux/summaryPanelSlice';
import { selectedOrderIdSelector } from '../../redux/ordersSlice';
import {useHistory} from 'react-router-dom';

const GlobalNav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const orderId = useSelector(selectedOrderIdSelector);
  const [menuIsHidden, setMenuIsHidden] = useState(false);

  const handleMouseEnter = event => {
    const {right, bottom} = event.target.getBoundingClientRect();

    dispatch(setXyLocation({x: right, y: bottom}));
    dispatch(setPanelIsVisible(true));
  };

  const handleMouseLeave = () => dispatch(setPanelIsVisible(false));

  const handleHamburgerClick = () => setMenuIsHidden(!menuIsHidden);

  const handleOrderStatusClick = () => {
    setMenuIsHidden(!menuIsHidden);
    history.push(`/order/${orderId}`);
  };

  const handleProductsClick = () => {
    setMenuIsHidden(!menuIsHidden);
    history.push('/');
  };

  return (
    <nav className='global-nav'>
      <div className='global-nav__toggle' onClick={handleHamburgerClick}><p>🍔</p></div>
      <div className={ menuIsHidden ? 'global-nav__wrapper menuIsHidden' : 'global-nav__wrapper' }>
        <div className='global-nav__left'>
          <div className='global-nav__item' onClick={handleProductsClick}>Products</div>
          <div className='global-nav__item'>Brands</div>
          <div className='global-nav__item'>Deals</div>
          <div className='global-nav__item'>Services</div>
        </div>

        <div className='global-nav__right'>
          <div className='global-nav__item'>Account</div>
          <div className='global-nav__item'>Recently Viewed</div>
          <div
            className='global-nav__item'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleOrderStatusClick}
          >Order Status</div>
          <div className='global-nav__item'>Saved Items</div>
        </div>
      </div>
    </nav>
  );
};

export default GlobalNav;
