import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import About from "./components/About";
import Contact from "./components/Contact";
import TermsAndPrivacy from "./components/TermsAndPrivacy";
import LabourDashboard from "./components/LabourDashboard";
import UserDashboard from "./components/UserDashboard";
import AuthProvider, { useAuth } from "./components/security/AuthContext";
import ErrorComponent from "./components/ErrorComponent";
import ViewLabours from "./components/ViewLabours";
import ViewLabourProfile from "./components/ViewLabourProfile";

function AuthenticatedRoute({ children }) {
  const authCOntext = useAuth();
  if(authCOntext.isAuthenticated)
    return children;

  return <Navigate to="/" />

}

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/terms" element={<TermsAndPrivacy />} />
            <Route exact path="/labours-list" element={<ViewLabours />} />
            <Route exact path="/labour-profile" element={<ViewLabourProfile />} />
            <Route exact path="/labour" element={<AuthenticatedRoute><LabourDashboard /></AuthenticatedRoute>} />
            <Route exact path="/user" element={<AuthenticatedRoute><UserDashboard /></AuthenticatedRoute>} />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
