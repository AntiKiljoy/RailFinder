//Consuelo, Connor and Kosei
import { onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import "./firebase-config";
import { auth } from "./firebase-config";
import CreatePage from "./pages/CreatePage";
//My new
import HomePage from "./pages/HomePage/HomePage";
import DirectoryPage from "./pages/Directory/DirectoryPage";
import DenmarkOverview from "./pages/Directory/Denmark/DenmarkOverview";  
//My new
import ProfilePage from "./pages/ProfilePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UpdatePage from "./pages/UpdatePage";
import PostDetailPage from "./pages/PostDetailPage";
import InfoPage from "./pages/InfoPage";
import DiscoverPage from "./pages/DiscoverPage";
import VetsPage from "./pages/VetsPage";
import PartnersPage from "./pages/PartnersPage";
import UserProfilePage from "./pages/UserProfilePage";
import VetDetailsPage from "./pages/VetDetailsPage";

export default function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); // start default value comes from localStorage

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is authenticated / signed in
        setIsAuth(true); // set isAuth to true
        localStorage.setItem("isAuth", true); // also, save isAuth in localStorage
      } else {
        // user is not authenticated / not signed in
        setIsAuth(false); // set isAuth to false
        localStorage.removeItem("isAuth"); // remove isAuth from localStorage
      }
    });
  }, []);

  // variable holding all private routes including the nav bar
  const privateRoutes = (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
        <Route path="/posts/:postId/edit" element={<UpdatePage />} />
        <Route path="/DenmarkOverview" element={<DenmarkOverview />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/vets" element={<VetsPage />} />
        <Route path="/vets/:vetId" element={<VetDetailsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/:userId" element={<UserProfilePage />} />
      </Routes>
    </>
  );

  // variable holding all public routes
  const publicRoutes = (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/signin" />} />
    </Routes>
  );

  return (
    <div className="App">
      {isAuth ? privateRoutes : publicRoutes}
    </div>
  );
}
