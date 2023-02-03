import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./context/auth-context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "animate.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DonatePage from "./pages/DonatePage";
import PartnershipPage from "./pages/PartnershipPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TermsAndCondition from "./pages/TermsAndConditionPage";
import MemberHomePage from "./pages/MemberHomePage";
import MemberMealPackageDetailPage from "./pages/MemberMealPackageDetailPage";
import MemberFeedbackPage from "./pages/MemberFeedbackPage";
import DriverHomePage from "./pages/DriverHomePage";
import CaregiverHomePage from "./pages/CaregiverHomePage";
import AdminHomePage from "./pages/AdminHomePage";
import AdminDonationHistoryPage from "./pages/AdminDonationHistoryPage";
import AdminManagePartnershipPage from "./pages/AdminManagePartnershipPage";
import AdminManageUsersPage from "./pages/AdminManageUsersPage";
import DonateThankYou from "./components/forms/DonateThankYou";


function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />


      <Route path="/donate" element={<DonatePage />} />
      <Route path="/ThankYou" element={<DonateThankYou />}/>



      <Route path="/partnership" element={<PartnershipPage />} />
      {!isLoggedIn && (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/terms" element={<TermsAndCondition />} />
        </>
      )}
      {isLoggedIn && (
        <>
          <Route path="/home" element={<MemberHomePage />} />
          <Route path="/feedback" element={<MemberFeedbackPage />} />
          <Route
            path="/meals-package-detail"
            element={<MemberMealPackageDetailPage />}
          />
          <Route path="/driver" element={<DriverHomePage />} />
          <Route path="/caregiver" element={<CaregiverHomePage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route
            path="/admin/donation-history"
            element={<AdminDonationHistoryPage />}
          />
          <Route
            path="/admin/manage-partner"
            element={<AdminManagePartnershipPage />}
          />
          <Route
            path="/admin/manage-users"
            element={<AdminManageUsersPage />}
          />
        </>
      )}
    </Routes>
  );
}

export default App;
