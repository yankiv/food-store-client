import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import Landing from './components/Landing/Landing';
import Store from './components/Store/Store';

const App = () => {

  let routes = (
    <Switch>
      <Route path="/store/info" exact component={Store} />
      <Route path="/store/promotions" exact component={Store} />
      <Route path="/store" exact component={Store} />
      <Route path="/rules" exact component={Landing} />
      <Route path="/help" exact component={Landing} />
      <Route path="/" exact component={Landing} />
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