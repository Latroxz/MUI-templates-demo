import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/main/MarketingPage';
import DemoDashboard from './components/main/Dashboard'; 
import DemoCheckout from './components/main/Checkout';


ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<DemoDashboard />} />
          <Route path="/checkout" element={<DemoCheckout />} />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
