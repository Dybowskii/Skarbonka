import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query'
import ParentView from './components/ParentView';
import ChildView from './components/ChildView';
import Nav from './components/Nav';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    {/* <ParentView /> */}
    <ChildView />
    </QueryClientProvider>  
  </React.StrictMode>
);

