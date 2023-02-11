import { Navigate, Route, Routes } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "./context/auth-context"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "animate.css"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import DonatePage from "./pages/DonatePage"
import PartnershipPage from "./pages/PartnershipPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import TermsAndCondition from "./pages/TermsAndConditionPage"
import MemberHomePage from "./pages/MemberHomePage"
import MemberMealPackageDetailPage from "./pages/MemberMealPackageDetailPage"
import MemberFeedbackPage from "./pages/MemberFeedbackPage"
import DriverHomePage from "./pages/DriverHomePage"
import CaregiverHomePage from "./pages/CaregiverHomePage"
import AdminHomePage from "./pages/AdminHomePage"
import AdminManagePartnershipPage from "./pages/AdminManagePartnershipPage"
import AdminManageUsersPage from "./pages/AdminManageUsersPage"
import TestRegister from "./components/forms/TestRegister"
import ThankYouPage from "./pages/ThankYouPage"
import MemberOrderHistoryPage from "./pages/MemberOrderHistoryPage"
import PartnerHomePage from "./pages/PartnerHomePage"
import AdminMealHistoryPage from "./pages/AdminMealHistoryPage"
import ErrorPage from "./pages/ErrorPage"

function App() {
  const { isLoggedIn, currentUser } = useContext(AuthContext)

  return (
    <Routes>
      <Route path='*' element={<ErrorPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/donate' element={<DonatePage />} />
      <Route path='/thankyou' element={<ThankYouPage />} />
      <Route path='/Test' element={<TestRegister />} />
      <Route path='/partnership' element={<PartnershipPage />} />

      {!isLoggedIn && (
        <>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/terms' element={<TermsAndCondition />} />
        </>
      )}

      {isLoggedIn && (
        <>
          {/* Login as Member Access */}
          {currentUser.role === "ROLE_MEMBER" && (
            <>
              <Route path='/home' element={<MemberHomePage />} />
              <Route
                path='/home/order-history'
                element={<MemberOrderHistoryPage />}
              />
              <Route path='/feedback' element={<MemberFeedbackPage />} />
              <Route
                path='/meals-package-detail/:menuId'
                element={<MemberMealPackageDetailPage />}
              />
              <Route
                path='/member/order/history'
                element={<MemberOrderHistoryPage />}
              />
            </>
          )}

          {/* Login as Driver Access */}
          {currentUser.role === "ROLE_RIDER" && (
            <Route path='/driver' element={<DriverHomePage />} />
          )}

          {/* Login as Caregiver Access */}
          {currentUser.role === "ROLE_CAREGIVER" && (
            <Route path='/caregiver' element={<CaregiverHomePage />} />
          )}

          {/* Login as Partner Access */}
          {currentUser.role === "ROLE_PARTNER" && (
            <Route path='/partner' element={<PartnerHomePage />} />
          )}

          {/* Login as Admin Access */}
          {currentUser.role === "ROLE_ADMIN" && (
            <>
              <Route path='/admin' element={<AdminHomePage />} />
              <Route
                path='/admin/meal-history'
                element={<AdminMealHistoryPage />}
              />
              <Route
                path='/admin/manage-partner'
                element={<AdminManagePartnershipPage />}
              />
              <Route
                path='/admin/manage-users'
                element={<AdminManageUsersPage />}
              />
            </>
          )}
        </>
      )}
    </Routes>
  )
}

export default App
