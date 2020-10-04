import React from 'react';

import './App.css';

import Layout from './components/Layout/Layout';
import Heading from './components/Heading/Heading';
import Categories from './components/Categories/Categories';

const App = () => (
  <div className="App">
    <Layout>
      <Heading />
      <Categories />
    </Layout>
  </div>
);

export default App;