import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import Landing from './components/Landing/Landing';
import Store from './components/Store/Store';

const App = () => {
  let routes = (
    <Switch>
      <Route path="/info" component={Store} />
      <Route path="/promotions" component={Store} />
      <Route path="/store" component={Store} />
      <Route path="/rules" component={Landing} />
      <Route path="/help" component={Landing} />
      <Route path="/" component={Landing} />
    </Switch>
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;