import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

function App({ children, router }: { children: Element; router: Router }) {
  return (
    <div className='App'>
      <Outlet />
    </div>
  );
}

export default App;
