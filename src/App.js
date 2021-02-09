import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/home/Home';
import OrderDetails from './screens/orderDetails/OrderDetails';
import GlobalNav from './components/globalNav/GlobalNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalNav />
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
