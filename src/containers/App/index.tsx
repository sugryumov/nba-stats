import React from 'react';
import Header from 'containers/Header';
import Routing from 'common/components/Routing';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routing />
      </div>
    </>
  );
}

export default App;
