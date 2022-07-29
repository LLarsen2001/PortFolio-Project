import Home from "./components/shared/Home";
import NoMatch from "./components/shared/NoMatch";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserAccount from "./components/shared/UserAccount";
import FetchUser from "./components/auth/FetchUser";
import Hooks from "./demos/Hooks.js";
import { normalize } from 'styled-normalize'

import { createGlobalStyle } from "styled-components";
import Profile from "./components/Pages/Profile";
import Jobs from "./components/Pages/Jobs";
import SearchBar from "./components/Pages/Search";
import JobForm from "./components/JobForm";
import JobsBoard from "./components/Pages/BoardJobs";
import CompanyForm from "./components/shared/CompanyForm";
import ImageUpload from "./components/shared/ImageUpload";
import DemoProfileImage from "./components/Pages/DemoProfileImage";
import ModalDemo from "./demos/ModalDemo";



const GlobalStyle = createGlobalStyle`
   ${normalize}
`;




const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <>
      <FetchUser>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<UserAccount />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/jobsboard" element={<JobsBoard />} />
            <Route path="/search" element={<SearchBar />} />
            <Route path="/addcompany" element={<CompanyForm />} />
            <Route path="/addjob" element={<JobForm />} />
            <Route path="image_upload" element={<ImageUpload />} />
            <Route path="demoprofile" element={<DemoProfileImage />} />
            <Route path="modaldemo" element={<ModalDemo />} />
          </Route>
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </FetchUser>
    </>
  </>
);

export default App;

