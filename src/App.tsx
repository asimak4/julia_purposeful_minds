import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // We'll create this next
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HelpfulInformationPage from './pages/HelpfulInformationPage';
import ContactPage from './pages/ContactPage';
import ClientLoginPage from './pages/ClientLoginPage';
import LegalTermsPage from './pages/LegalTermsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="helpful-information" element={<HelpfulInformationPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="client-login" element={<ClientLoginPage />} />
          <Route path="legal" element={<LegalTermsPage />} />
          {/* You can add a 404 Not Found route here if you like */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
