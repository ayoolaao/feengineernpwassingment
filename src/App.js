import React, { useEffect } from 'react';
import './app.scss';
import { Route, Switch, withRouter } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { fetchOrders } from './redux/ordersSlice';
import { ordersSelector } from './redux/ordersSlice';
import { selectPanelIsActive, selectPanelIsVisible, selectXyLocation } from './redux/summaryPanelSlice';
import Home from './screens/home/Home';
import NotFound from './screens/notFound/NotFound';
import OrderDetails from './screens/orderDetails/OrderDetails';
import GlobalNav from './components/globalNav/GlobalNav';
import SummaryPanel from './components/summarypanel/SummaryPanel';

function App() {
  const dispatch = useDispatch();
  const orders = useSelector(ordersSelector)
  const panelIsActive = useSelector(selectPanelIsActive);
  const panelIsVisible = useSelector(selectPanelIsVisible);
  const xyLocation = useSelector(selectXyLocation);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []); // eslint-disable-line


  return (
    <div className="app">
      <header className="app-header">
        <GlobalNav />
        {(panelIsVisible || panelIsActive) && orders && <SummaryPanel order={orders[0]} coordinates={xyLocation} />}
      </header>

      <Switch>
        <Route path='/order/:orderId' render={props => <OrderDetails {...props}/>} />
        <Route exact path='/' render={props => <Home {...props}/>} />
        <Route path='*' render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
