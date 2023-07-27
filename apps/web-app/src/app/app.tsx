import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Welcome from './welcome';

const StyledApp = styled.div`
  // Your style here
`;

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledApp>
        <Welcome />
      </StyledApp>
    </QueryClientProvider>
  );
}

export default App;
