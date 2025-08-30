import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './styles/index.css';
import App from './App.jsx';
import ComingSoon from './pages/coming-soon/ComingSoon.jsx';
import TermsConditions from './pages/terms/TermsConditions.jsx';
import PrivacyPolicy from './pages/privacy/PrivacyPolicy.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
