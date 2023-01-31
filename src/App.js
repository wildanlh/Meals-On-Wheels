import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import PartnershipPage from './pages/PartnershipPage';
import LoginPage from './pages/LoginPage';
import TermsAndCondition from './pages/TermsAndConditionPage';
import MemberHomePage from './pages/MemberHomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/partnership" element={<PartnershipPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/terms" element={<TermsAndCondition />} />
      <Route path="/home" element={<MemberHomePage />} />
    </Routes>
  );
}

export default App;
