/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Welcome from './welcome';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Welcome />
    </QueryClientProvider>
  );
};

export default App;
