import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import SearchHeader from './components/SearchHeader';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SearchHeader />
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
