import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  
  return (
  <BrowserRouter>
  <nav>
    <Link to="/profile" style={{ marginRight: '10px' }}>Profile</Link>
    <Link to="/blog/123">Blog Post 123</Link>
  </nav>

      <Routes>
        <Route path="profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
