import React from 'react';

import Layout from './components/Layout/Layout';
import Heading from './components/Heading/Heading';
import Categories from './components/Categories/Categories';

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Heading />
        <Categories />
      </Layout>
    </div>
  );
}

export default App;