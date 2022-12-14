import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

function App({children:React.HTMLElement}) {
  return (
    <div className='App'>
      <Outlet />
    </div>
  );
}

export default App;
