import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// redux imports
import { useGetProfileQuery } from "./features/apiSlice";
import { setUser, removeUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

// page imports
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MyProfilePage from "./pages/MyProfilePage";
import CreateFundraiserPage from "./pages/CreateFundraiserPage";
import CampaignPage from "./pages/CampaignPage";
import SportsCategory from "./pages/Categories/SportsCategory";
import AnimalCategory from "./pages/Categories/AnimalCategory";
import MedicalCategory from "./pages/Categories/MedicalCategory";
import EducationCategory from "./pages/Categories/EducationCategory";
import EnvironmentCategory from "./pages/Categories/EnvironmentCategory";
import EmergencyCategory from "./pages/Categories/EmergencyCategory";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import AboutPage from "./pages/AboutPage"; // Import AboutPage

// static asset imports
import spinner from "./assets/spinner.svg";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const {
    data: profileData,
    isLoading,
    isError,
  } = useGetProfileQuery(undefined, { skip: !user }); // Skip fetching profile data if user is null

  useEffect(() => {
    if (isError) dispatch(removeUser());
    if (profileData) dispatch(setUser(profileData));
  }, [profileData, dispatch, isError]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <img src={spinner} alt="A green spinner" />
      </div>
    );
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/category/sports" element={<SportsCategory />} />
            <Route path="/category/animal" element={<AnimalCategory />} />
            <Route path="/category/education" element={<EducationCategory />} />
            <Route
              path="/category/environment"
              element={<EnvironmentCategory />}
            />
            <Route path="/category/medical" element={<MedicalCategory />} />
            <Route path="/category/emergency" element={<EmergencyCategory />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<MyProfilePage />} />
            <Route path="/campaign/:id" element={<CampaignPage />} />
            <Route
              path="/create-new-fundraiser"
              element={<CreateFundraiserPage />}
            />
            <Route
              path="/verify-email/:token"
              element={<EmailVerificationPage />}
            />
            <Route path="/about" element={<AboutPage />} /> {/* Add AboutPage */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
