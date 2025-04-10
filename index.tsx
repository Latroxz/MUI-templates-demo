import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DemoMarketing from '@components/main/MarketingPage';
import DemoDashboard from '@components/main/Dashboard';
import DemoCheckout from '@components/main/Checkout';
import DemoSignInSide from '@components/main/SignInSide';
import DemoSignUp from '@components/main/SignUp';
import DemoBlog from '@components/main/Blog';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DemoMarketing />} />
          <Route path="/dashboard" element={<DemoDashboard />} />
          <Route path="/checkout" element={<DemoCheckout />} />
          <Route path="/sign-in" element={<DemoSignInSide />} />
          <Route path="/sign-up" element={<DemoSignUp />} />
          <Route path="/blog" element={<DemoBlog />} />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
