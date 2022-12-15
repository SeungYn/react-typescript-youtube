import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import SearchHeader from './components/SearchHeader';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <YoutubeApiProvider>
          <SearchHeader />
          <Outlet />
        </YoutubeApiProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
