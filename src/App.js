import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { fetchOrders } from './redux/ordersSlice';
import { selectPanelIsActive, selectPanelIsVisible, selectXyLocation } from './redux/summaryPanelSlice';
import Home from './screens/home/Home';
import OrderDetails from './screens/orderDetails/OrderDetails';
import GlobalNav from './components/globalNav/GlobalNav';
import SummaryPanel from './components/summarypanel/SummaryPanel';

function App() {
  const dispatch = useDispatch();
  const orders = useSelector(({ ordersStore }) => ordersStore.orders)
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

      <Router>
        <Switch>
          <Route exact path='/order' render={props => <OrderDetails {...props}/>} />
          <Route exact path='/' render={props => <Home {...props}/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
