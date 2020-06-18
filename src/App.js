import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './compoments/Header';
import HeaderRFC from './compoments/HeaderRFC';
import BaiTapDanLayout from './compoments/BaiTapDanLayout/BaiTapDanLayout';
import DataBinding from './DataBinding/DataBinding';

function App() {
  return (
    <div className="App">
        {/* <BaiTapDanLayout /> */}
        <DataBinding />
    </div>
  );
}

export default App;
