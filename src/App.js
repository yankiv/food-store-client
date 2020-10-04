import React from 'react';

import './App.css';

import Layout from './components/Layout/Layout';
import Landing from './components/Landing/Landing';

const App = () => (
  <div className="App">
    <Layout>
      <Landing />
    </Layout>
  </div>
);

export default App;