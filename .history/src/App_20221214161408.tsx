import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

function App({ children }: { children?: React.ReactNode }) {
  return (
    <div className='App'>
      <Outlet />
    </div>
  );
}

export default App;
