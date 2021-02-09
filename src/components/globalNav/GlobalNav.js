import React from 'react';
import './globalNav.scss';

const GlobalNav = () => {
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
        <span className='global-nav__item'>Order Status</span>
        <span className='global-nav__item'>Saved Items</span>
      </div>
    </nav>
  );
};

export default GlobalNav;
