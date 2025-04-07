import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './Dashboard';
import App2 from './MarketingPage'

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App2 />
    </StyledEngineProvider>
  </React.StrictMode>
);